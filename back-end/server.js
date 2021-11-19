#!/usr/bin/env node
const server = require("./app.js"); // load up the web server
const axios = require("axios"); // middleware for making requests to APIs
const url = require('url');   // process queries in url strings
const mongoose = require('mongoose'); // module for database communication
const restaurant_info = require('./restaurant_info.json')
require("dotenv").config({ silent: true }); // .env

// use cors to bypass chrome error
const cors = require("cors");
server.use(cors());

// the port to listen to for incoming requests
const port = 3001;

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});


// mongoose setup
const db_url = 'mongodb+srv://david:saverie@cluster0.53ot4.mongodb.net/saverie?retryWrites=true'
mongoose.connect(db_url, () => { console.log('Db connection state: ' + mongoose.connection.readyState) })
const historySchema = new mongoose.Schema({
  date: Date,
  name: String,
  order_total: Number
})
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  favorites: Array,
  history: [historySchema]
})
const User = mongoose.model('User', userSchema, 'users')

// route handling
server.get("/usermenu", (req, res) => {
  User.findById(req.query.id, (err, docs) => {
    if(err || docs.length == 0){
      console.log('User not found')
      res.status(404)
      res.redirect("http://localhost:3000/signin")
    }
    else {
      res.json(restaurant_info)
    }
  })
})

server.post("/updateitem", (req, res) => {
  User.findByIdAndUpdate(
    req.body.id, 
    {$push: {favorites: req.body.name}}, 
    {safe: true, upsert: true}, 
    (err, doc) => {if(err) console.log(err)
  })
})

server.get("/orderhistorypage", (req, res, next) => {
  if (req.query.id) {
    axios
      .get(
        `https://my.api.mockaroo.com/mock_user_order_history.json?key=0b54f900`
      )
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next()
  }
})

server.get("/saveddistributors", (req, res, next) => {
  User.findById(req.query.id, (err, docs) => {
    if(err || docs.length == 0){
      console.log('User not found')
      res.status(404);
      res.redirect("http://localhost:3000/signin")
    }
    else{
      restInfo = restaurant_info
      data = restInfo.filter(e => docs.favorites.includes(e.name))
      res.json(data)
    }
  })
})

//register authentication
server.get("/menu", (req, res, next) => {
  User.findById(req.query.id, (err, docs) => {
    if(err || docs.length == 0){
      console.log('User not found')
      res.status(404);
      next()
    }
    else{
      axios
      .get(`https://my.api.mockaroo.com/restaurant_menu.json?key=84c7cbc0&__method=POST`)
      .then((apiRes) => res.json(apiRes.data))
    }
  })
})

server.post("/register-submit", function (req, res) {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.repassword &&
    req.body.password == req.body.repassword
  ) {
    // Check if user exists
    User.find({email: req.body.email}, (err, docs) => {
      if(docs.length || err){
        console.log('Email taken')
        res.status(400);
        res.redirect("http://localhost:3000/register")
      }
      else {
        // Create new user
        const new_user = new User({ 
          firstName: req.body.first_name,
          lastName: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          favorites: [],
          history: {}
        })
        new_user.save(err => { if(err) console.log('Unable to create new user') })
        res.status(200);
        res.redirect(url.format({
          pathname:"http://localhost:3000/usermenu",
          query: { id: new_user._id.toString()}
        }));
      }
    })
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/register");
  }
});

//sign in suthentication
server.post("/signin-submit", function (req, res) {
  if (req.body.email && req.body.password) {
    User.find({email: req.body.email}, (err, docs) => {
      if(err || docs.length == 0){
        console.log('User not found')
        res.status(400)
        res.redirect("http://localhost:3000/signin")
      }
      else if(docs[0].password == req.body.password) {
        console.log('User exists: ', docs[0].email);
        res.status(200);
        res.redirect(url.format({
          pathname:"http://localhost:3000/usermenu",
          query: { id: docs[0]._id.toString()}
        }));
      }
      else {
        console.log('Incorrect password')
      }
    })
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/signin");
  }
})

// a function to stop listening to the port
const close = () => {
  listener.close();
};

// module.exports = {
//   close: close,
// }
module.exports = server;