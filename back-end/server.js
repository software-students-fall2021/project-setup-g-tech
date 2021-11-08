#!/usr/bin/env node
const server = require("./app") // load up the web server
const port = 3000 // the port to listen to for incoming requests
// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
<<<<<<< Updated upstream
  console.log(`Server running on port: ${port}`)
})
=======
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


>>>>>>> Stashed changes
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}