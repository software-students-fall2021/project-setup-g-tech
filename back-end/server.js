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
const userSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  favorites: Array
})
const User = mongoose.model('User', userSchema, 'users')

// route handling
server.get("/usermenu", (req, res, next) => {
  if(req.query.id){
    res.json(restaurant_info);
  }
  else{
    res.status(404);
    next();
  }
});

server.get("/orderhistorypage", (req, res, next) => {
  if (req.query.user) {
    axios
      .get(
        `https://my.api.mockaroo.com/mock_user_order_history.json?key=0b54f900`
      )
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next();
  }
});

server.get("/saveddistributors", (req, res, next) => {
  if(req.query.id){
    User.findById('0', (err, docs) => {
      if(err){
        console.log(err)
      }
      else{
        restInfo = restaurant_info
        data = restInfo.filter(e => docs.favorites.includes(e.name))
        res.json(data)
      }
    });
  } 
  else{
  res.status(404);
  next()}
});

//register authentication
server.get("/menu", (req, res, next) => {
  if (req.query.user == "mockData") {
    axios
      .get(
        `https://my.api.mockaroo.com/restaurant_menu.json?key=84c7cbc0&__method=POST`
      )
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next();
  }
});

server.post("/register-submit", function (req, res) {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.repassword
  ) {
    const data = {
      status: "true",
      message: "The data has been entered to the database",
      your_data: {
        name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        repassword: req.body.repassword,
      },
    };
    console.log(data);
    res.status(200);
    res.redirect("http://localhost:3000/usermenu");
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/register");
  }
});

//sign in suthentication
server.post("/signin-submit", function (req, res) {
  if (req.body.email && req.body.password) {
    const data = {
      status: "true",
      message: "The data has been posted",
      your_data: {
        email: req.body.email,
        password: req.body.password,
      },
    };
    console.log(data);
    res.status(200);
    res.redirect(url.format({
      pathname:"http://localhost:3000/usermenu",
      query: { "user": 1}
    }));
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/signin");
  }
});

// a function to stop listening to the port
const close = () => {
  listener.close();
};

// module.exports = {
//   close: close,
// }
module.exports = server;