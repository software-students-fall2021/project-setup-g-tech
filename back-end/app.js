// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

// import some useful middleware
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev"))

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))

// export the express app we created to make it available to other modules
module.exports = app