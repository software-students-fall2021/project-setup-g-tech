require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const mongoose = require("mongoose");

//Db connection and setup
mongoose.connect(process.env.DB_DOMAIN);
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
  items: [menuSchema],
  order_total: Number,
  status: String,
});
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  favorites: Array,
  history: [historySchema],
  cart: [menuSchema],
});
const UserModel = mongoose.model("UserModel", userSchema, "users");

// set up some JWT authentication options
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt"); // look for the Authorization request header
jwtOptions.secretOrKey = process.env.JWT_SECRET; // an arbitrary string used during encryption
// console.log(jwtOptions) // debug to make sure the secret from the .env file is loaded correctly
// passport can work with many authentication systems... here we are setting some middleware code for using JWT that we'll pass to passport to use
const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  // console.log("JWT payload received", jwt_payload) // debugging

  UserModel.findOne({ _id: jwt_payload.id }, (err, user) => {
    if (!user || err) {
      // we didn't find the user... fail!
      next(null, false);
    } else {
      // we found the user... keep going
      next(null, user);
    }
  });

  //   const user =  User.find({id: jwt_payload.id })// find a matching user using a convenient lodash function... we would normally look this user up in a real database
  //   if (user) {

  //   } else {
  //     // we didn't find the user... fail!
  //     next(null, false)
  //   }
});

module.exports = {
  jwtOptions,
  jwtStrategy,
};
