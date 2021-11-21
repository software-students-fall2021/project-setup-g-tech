#!/usr/bin/env node
const server = require("./app.js"); // load up the web server
const axios = require("axios"); // middleware for making requests to APIs
const url = require('url');   // process queries in url strings
const mongoose = require('mongoose'); // module for database communication
const restaurant_info = require('./restaurant_info.json')
require("dotenv").config({ silent: true }); // .env

// use cors to bypass chrome error
const cors = require("cors");
const { privateDecrypt } = require("crypto");
var bcrypt = require("bcryptjs");
server.use(cors());

// the port to listen to for incoming requests
const port = 3001;

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// mongoose setup
const db_url = 'mongodb+srv://david:saverie@cluster0.53ot4.mongodb.net/saverie?retryWrites=true'
mongoose.connect(db_url, () => { console.log('Db connection state: ' + mongoose.connection.readyState) })
const menuSchema = new mongoose.Schema({
  type: String,
  title: String,
  price: Number,
  quantity: Number,
  description: String,
  // image: String
})
const historySchema = new mongoose.Schema({
  date: Date,
  items: [menuSchema],
  order_total: Number,
  status: String
})
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  favorites: Array,
  history: [historySchema],
  cart: [menuSchema]
})
const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  image: String,
  items: [menuSchema]
})


const Item = mongoose.model('Item', menuSchema, 'menuitems')
const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants')
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

server.post("/register-submit", async (req, res) => {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.repassword &&
    req.body.password == req.body.repassword
  ) {

    encryptedPassword = await bcrypt.hash(req.body.password, 10);
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
          password: encryptedPassword,
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
      else if(bcrypt.compare(req.body.password, docs[0].password)) {
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
});

//menu registration in authentication
server.post("/menu-submit", function (req, res) {

  if (
    req.body.category &&
    req.body.item_name &&
    req.body.price &&
    req.body.quantity
  ) {
   
    // Check if item exists
    Restaurant.find({items: {title: req.body.item_name}}, (err, docs) => {
      if(docs.length || err){
        console.log('Menu item already exists.')
        res.status(400);
        res.redirect("http://localhost:3000/business-menu")
        
      }
      else {
        // Create new Item
        const new_item = new Item({ 
          type: req.body.category,
          title: req.body.item_name,
          price: req.body.price,
          quantity: req.body.quantity,
          description: req.body.description,
        })

        new_item.save(err => { if(err) console.log('Unable to add new menu item') })
        res.status(200);
        res.redirect(url.format({
          pathname:"http://localhost:3000/business-menu",
        }));
      }
    })
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/business-menu");

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

