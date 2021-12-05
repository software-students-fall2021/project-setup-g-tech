// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from "../header-tab/HeaderTab";
import Input from "../input-field/Input";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./signin.css";

const Signin = (props) => {

  const [response, setResponse] = useState({});
  const [error, setError] = useState(' ');


  useEffect(() => {
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.email}`);
      localStorage.setItem("token", response.token);
      window.location.replace("http://localhost:3000/usermenu");
    }
  }, [response]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target.email.value == ''){
      setError("Please enter your email.");
    }
    if (e.target.password.value == ''){
      setError("Please enter your password.");
    }
    const requestData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await axios.post(
      "http://localhost:3001/signin-submit",
      requestData
    );
    setResponse(res.data);
  };

  return (
    <div className="Signin">
      <HeaderTab pageTitle="Sign in" returnPath="/" />
      {/* onSubmit={handleSubmit} */}
      <form className="fields" onSubmit={handleSubmit} method="POST">
        {
          //handle error condition
        }
        <Input
          title="Email"
          name="email"
          type="email"
          placeholder="name@example.com"
        />
        <Input
          title="Password"
          name="password"
          type="password"
          placeholder="*******"
        />
        <div class="errorMessage">{error}</div>

        <div className="button">
          {/* <Submit type="submit" value="SIGN IN"/> */}
          {/* <Link to='/usermenu'> */}
          <Input className="submitButton" type="submit" value="SIGN IN"></Input>
          {/* </Link> */}
        </div>
      </form>
      {/* <div>
              <p>Don't have an account? </p>
              <p>Register</p>
          </div> */}
      {/* <p>
            Server response (for debugging purposes):
            <br />
            <br />
            {JSON.stringify(status, null, 2)}
          </p> */}
    </div>
  );
  // otherwise, if the user has successfully logged-in, redirect them to a different page
  // in this example, we simply redirect to the home page, but a real app would redirect to a page that shows content only available to logged-in users
  // else return <Redirect to="/usermenu" />
};

export default Signin;
