#!/usr/bin/env node
const server = require("./app.js"); // load up the web server
const axios = require("axios"); // middleware for making requests to APIs
require("dotenv").config({ silent: true }); // .env

// use cors to bypass chrome error
const cors = require("cors");
const { privateDecrypt } = require("crypto");
server.use(cors());

// the port to listen to for incoming requests
const port = 3001;

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {

<<<<<<< Updated upstream
  console.log(`Server running on port: ${port}`)
})
=======
// mongoose setup
const db_url = 'mongodb+srv://david:saverie@cluster0.53ot4.mongodb.net/saverie?retryWrites=true'
mongoose.connect(db_url, () => { console.log('Db connection state: ' + mongoose.connection.readyState) })
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
const menuSchema = new mongoose.Schema({
  type: String,
  title: String,
  price: Number,
  quantity: Number,
  description: String,
  image: String
})

const Item = mongoose.model('Item', menuSchema, 'menuitems')
const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants')
const User = mongoose.model('User', userSchema, 'users')
>>>>>>> Stashed changes

  console.log(`Server running on port: ${port}`);
});

// route handling
server.get("/usermenu", (req, res, next) => {
  if (req.query.user == "mockData") {
    axios
      .get(`https://my.api.mockaroo.com/restaurant_info.json?key=4aedac00`)
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next();
  }
});

server.get("/saveddistributors", (req, res, next) => {
  if (req.query.user == "mockData") {
    axios
      .get(`https://my.api.mockaroo.com/restaurant_info.json?key=4aedac00`)
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next();
  }
});

//register authentication
server.get("/menu", (req, res, next) => {
  if (req.query.user == "mockData") {
    axios
      .get(`https://my.api.mockaroo.com/restaurant_menu.json?key=84c7cbc0&__method=POST`)
      .then((apiRes) => res.json(apiRes.data));
  } else {
    res.status(404);
    next();
  }
});

server.post("/menu-submit", function (req, res) {
  if (
    req.body.category &&
    req.body.item_name &&
    req.body.price &&
    req.body.quantity &&
    req.body.description 
  ) {
    // Create new item
    const new_item = new Item({ 
      type: req.body.category,
      title: req.body.item_name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description
    })

    new_item.save(err => { if(err) console.log('Unable to create new item') })
    res.status(200);
    res.redirect(url.format({
      pathname:"http://localhost:3000/business-menu",
      query: { id: new_item._id.toString()}
    }));
  } 
  else {
    res.status(400);
    res.redirect("http://localhost:3000/register");
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
    res.redirect("http://localhost:3000/signin");
  } else {
    res.status(400);
    res.redirect("http://localhost:3000/register");
  }
});

//sign in suthentication
server.post("/signin-submit", function (req, res) {
  if (
    req.body.email &&
    req.body.password
  ) {
    const data = {
      status: "true",
      message: "The data has been posted",
      your_data: {
        email: req.body.email,
        password: req.body.password      },
    };
    console.log(data);
    res.status(200);
    res.redirect("http://localhost:3000/usermenu");
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
