#!/usr/bin/env node
const cookieParser = require("cookie-parser");
const server = require("./app.js"); // load up the web server
const axios = require("axios"); // middleware for making requests to APIs
const express = require("express"); // CommonJS import style!
const url = require("url"); // process queries in url strings
const mongoose = require("mongoose"); // module for database communication

require("dotenv").config({ silent: true }); // .env

// use cors to bypass chrome error
const cors = require("cors");
const { privateDecrypt } = require("crypto");
var bcrypt = require("bcryptjs");
server.use(cors());

const jwt = require("jsonwebtoken");
const passport = require("passport");
server.use(passport.initialize()); // tell express to use passport middleware
// use this JWT strategy within passport for authentication handling
const { jwtOptions, jwtStrategy } = require("./jwt-config.js"); // import setup options for using JWT in passport
passport.use(jwtStrategy);
// use express's builtin body-parser middleware to parse any data included in a request
server.use(express.json()); // decode JSON-formatted incoming POST data
server.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data
server.use(cookieParser()); // useful middleware for dealing with cookies

var path = require("path");
const multer = require("multer");

// the port to listen to for incoming requests
const port = 3001;

// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});

// mongoose setup
const db_url = process.env.DB_DOMAIN;
mongoose.connect(db_url, () => {
  console.log("Db connection state: " + mongoose.connection.readyState);
});

const menuSchema = new mongoose.Schema({
  type: String,
  title: String,
  price: Number,
  quantity: Number,
  description: String,
  // image: String
});
const historySchema = new mongoose.Schema({
  date: Date,
  name: String,
  items: [menuSchema],
  order_total: Number,
  status: String,
});

/*
const favoriteSchema = new mongoose.Schema({
  name: String,
  location: String,
});
*/
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  favorites: Array,
  history: Array,
  cart: [menuSchema],
});
const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  image: String,
  items: [menuSchema],
});

const Item = mongoose.model("Item", menuSchema, "menuitems");
const Restaurant = mongoose.model(
  "Restaurant",
  restaurantSchema,
  "restaurants"
);
const User = mongoose.model("User", userSchema, "users");

// a route that sends a response including the Set-Cookie header.
/* 
server.get("/set-cookie", (req, res) => {
  res
    .cookie("token", token) // send a cookie in the response with the key 'foo' and value 'bar'
    .send({
      success: true,
      message: "Sent a cookie to the browser... hopefully it saved it.",
    })
})
*/

// route handling
server.get(
  "/usermenu",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;
    console.log(`User ID: ${id}`);
    User.findById(id, (err, docs) => {
      if (err || docs.length == 0) {
        console.log("User not found");
        return res.json({ success: false, message: "User not found" });
      } else {
        Restaurant.find({}, (err, docs) => {
          if (err || docs.length == 0) {
            console.log("Restaurants not found");
            res.status(404);
            return res.json({
              success: false,
              message: "Restaurant not found",
            });
          } else {
            return res.json(docs);
          }
        });
      }
    });
  }
);

// // a route that looks for a Cookie header in the request and sends back whatever data was found in it.
// app.get("/get-cookie", (req, res) => {
//   const numCookies = Object.keys(req.cookies).length // how many cookies were passed to the server

//   console.log(`Incoming cookie data: ${JSON.stringify(req.cookies, null, 0)}`)
//   res.send({
//     success: numCookies ? true : false,
//     message: numCookies
//       ? "thanks for sending cookies to the server :)"
//       : "no cookies sent to server :(",
//     cookieData: req.cookies,
//   })
// })

server.post(
  "/updateitem",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;
    if (req.body.action == "add") {
      User.findByIdAndUpdate(
        id,
        { $push: { favorites: req.body.name } },
        { safe: true, upsert: true },
        (err, doc) => {
          if (err) console.log(err);
        }
      );
    } else {
      User.findByIdAndUpdate(
        id,
        { $pull: { favorites: req.body.name } },
        { safe: true, upsert: true },
        (err, doc) => {
          if (err) console.log(err);
        }
      );
    }
  }
);

server.get(
  "/orderhistorypage",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;
    User.findById(id, (err, docs) => {
      if (err || docs.length == 0) {
        console.log("User not found");
        res.status(404);
        res.redirect("http://localhost:3000/");
      } else {
        if (err || docs.history.length == 0) {
          console.log("No order history");
        } else {
          res.json(docs.history);
        }
      }
    });
  }
);

server.post("/updateorderstatus", (req, res) => {
  const id = req.user.id;
  User.findByIdAndUpdate(
    id,
    { $push: { history: req.body.order_status } },
    { safe: true, upsert: true },
    (err, doc) => {
      if (err) console.log(err);
    }
  );
});

// saved distributors token
server.get(
  "/saveddistributors",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const id = req.user.id;
    User.findById(id, (err, docs) => {
      if (err || docs.length == 0) {
        console.log("User not found");
        res.status(404);
        res.redirect("http://localhost:3000/");
      } else {
        Restaurant.find({}, (err, restInfo) => {
          if (err || docs.length == 0) {
            console.log("Restaurants not found");
            res.status(404);
            res.redirect("http://localhost:3000/");
          } else {
            data = restInfo.filter((e) => docs.favorites.includes(e.name));
            res.json(data);
          }
        });
      }
    });
  }
);

// checkout token

server.get("/checkout",passport.authenticate("jwt", { session: false }), (req, res, next) => {
  const id = req.user.id
  User.findById(id, (err, docs) => {
    if (err || docs.length == 0) {
      console.log("User not found");
      res.status(404);
      res.redirect("http://localhost:3000/");
      
    }
    // else{
    // //   // let restInfo ='';
    //   req.user.cart.find({}, (err, cartinfo)=>{
    //     if(err || docs.length == 0){
    //       console.log('no items in cart')
    //       res.status(404);
    //       res.redirect("http://localhost:3000/");
    //     }
    //     else{
    //       // data = cartinfo.filter(e => docs.favorites.includes(e.name));
    //       res.json(cartinfo);
    //     }
    //   })
    // }
  })
});


// ======================================================
//menu display for restaurant wo API
server.get(
  "/getmenu",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("req body: ", req.body);
    Restaurant.findOne({ _id: req.headers.rest_id }, (err, docs) => {
      if (err || docs.length == 0) {
        console.log("Restaurant not found");
        res.status(404);
        next();
      } else {
        res.json(docs);
      }
    });
  }
);

// ======================================================
// User registration
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
    User.find({ email: req.body.email }, (err, docs) => {
      if (docs.length || err) {
        console.log("Email taken");
        res.status(400);
        return res.redirect("http://localhost:3000/register");
      } else {
        // Create new user
        const new_user = new User({
          firstName: req.body.first_name,
          lastName: req.body.last_name,
          email: req.body.email,
          password: encryptedPassword,
          favorites: [],
          history: {},
        });
        new_user.save((err) => {
          if (err) console.log("Unable to create new user");
        });
        res.status(200);
        const payload = { id: new_user.id };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        return res.json({ success: true, email: new_user.email, token: token });
      }
    });
  } else {
    res.status(400).send("All fields not entered/passwords do not match.");
    res.redirect("http://localhost:3000/register");
  }
});

//sign in authentication
server.post("/signin-submit", function (req, res) {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user || err) {
        console.log("User not found");
        res.status(400);
        return res.json({
          success: false,
          message: "No username or password supplied",
        });
      } else {
        console.log("User exists: ", user.email);
        bcrypt.compare(req.body.password, user.password, (err, ret) => {
          if (ret) {
            res.status(200);
            const payload = { id: user.id }; // some data we'll encode into the token
            const token = jwt.sign(payload, jwtOptions.secretOrKey); // create a signed token
            return res.json({ success: true, email: user.email, token: token }); // send the token to the client to store
          } else {
            console.log("Incorrect password");
            res.status(400);
            return res.json({
              success: false,
              message: "No username or password supplied",
            });
          }
        });
      }
    });
  } else {
    console.log("No username or password supplied");
    res.status(400);
    return res.json({
      success: false,
      message: "No username or password supplied",
    });
  }
});

// Restaurant sign in authentication
server.post("/business-signin-submit", function (req, res) {
  // ========================================================
  if (req.body.email && req.body.password) {
    Restaurant.findOne({ email: req.body.email }, (err, restaurant) => {
      if (restaurant.length || err) {
        console.log("Restaurant not found");
        res.status(400);
        res.redirect("http://localhost:3000/business-signin");
      } else if (bcrypt.compare(req.body.password, restaurant.password)) {
        console.log("Restaurant exists: ", restaurant.email);
        res.status(200);
        const payload = { id: restaurant.id }; // some data we'll encode into the token
        const token = jwt.sign(payload, jwtOptions.secretOrKey); // create a signed token
        return res.json({
          success: true,
          email: restaurant.email,
          token: token,
          id: restaurant.id,
        }); // send the token to the client to store
      } else {
        console.log("Incorrect password");
        console.log(restaurant.password);
        console.log(req.body.password);
        return res
          .status(401)
          .json({ success: false, message: "incorrect password" });
      }
    });
  }
  // ========================================================
  else {
    res.status(400);
    res.redirect("http://localhost:3000/business-signin");
  }
});

server.use(express.static(__dirname + "./public/"));
// destination: "../public/uploads/",

// Handling Image Uploads
var Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
var Upload = multer({ storage: Storage }).single("file");
// End of Handling Image File Uploads

// Start of business restaurant registration
server.post("/business-register-submit", Upload, function (req, res) {
  if (
    req.body.name &&
    req.body.email &&
    req.body.location &&
    req.body.password &&
    req.body.repassword &&
    req.body.password == req.body.repassword
  ) {
    // Check if restaurant exists
    Restaurant.find({ email: req.body.email }, (err, docs) => {
      if (docs.length || err) {
        console.log("Email taken");
        res.status(400);
        res.redirect("http://localhost:3000/business-register");
      } else {
        // Create new restaurant
        const new_restaurant = new Restaurant({
          name: req.body.name,
          email: req.body.email,
          location: req.body.location,
          password: req.body.password,
          image: req.file.filename,
          items: {},
        });
        console.log("Restaurant created");
        new_restaurant.save((err) => {
          if (err) console.log("Unable to register new restaurant");
        });
        res.status(200);
        res.redirect(
          url.format({
            pathname: "http://localhost:3000/business-menu",
          })
        );
      }
    });
  } else {
    console.log("Not all fields entered.");
    res.status(400);
    res.redirect("http://localhost:3000/business-register");
  }
});
// End of business restaurant registration

//restaurant item addition
server.post("/menu-submit", function (req, res) {
  console.log(req.body.id);
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
      description: req.body.description,
    });
    Restaurant.findByIdAndUpdate(
      req.body.id,
      { $push: { items: new_item } },
      { safe: true, upsert: true },
      (err, doc) => {
        if (err) console.log(err);
      }
    );

    new_item.save((err) => {
      if (err) console.log("Unable to add new menu item");
    });
    res.status(200);
    console.log("req.body.id", req.body.id);
    res.redirect(
      url.format({
        pathname: "http://localhost:3000/business-menu",
      })
    );
  } else {
    res.status(400);
    res.redirect(
      url.format({
        pathname: "http://localhost:3000/business-menu",
      })
    );
  }
});

// a route to handle logging out users
server.get("/logout", function (req, res) {
  // nothing really to do here... logging out with JWT authentication is handled entirely by the front-end by deleting the token from the browser's memory
  res.json({
    success: true,
    message:
      "There is actually nothing to do on the server side... you simply need to delete your token from the browser's local storage!",
  });
});

// a function to stop listening to the port
const close = () => {
  listener.close();
};

module.exports = server;
