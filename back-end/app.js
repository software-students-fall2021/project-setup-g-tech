// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

// export the express app we created to make it available to other modules
module.exports = app