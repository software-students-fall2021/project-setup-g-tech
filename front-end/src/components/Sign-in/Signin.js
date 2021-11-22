// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from "../header-tab/HeaderTab";
import Input from "../input-field/Input";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./signin.css";

const Signin = (props) => {
  // create state variables to hold username and password
  // const [status, setStatus] = useState({}) // the API will return an object indicating the login status in a success field of the response object

  // // if the user's logged-in status changes, call the setuser function that was passed to this component from the PrimaryNav component.
  // useEffect(() => {
  //   // if the login was a success, call the setuser function that was passed to this component as a prop
  //   if (status.success) {
  //     console.log(`User successfully logged in: ${status.email}`)
  //     props.setuser(status)
  //   }
  // }, [status])

  // const handleSubmit = async e => {
  //   // prevent the HTML form from actually submitting... we use React's javascript code instead
  //   e.preventDefault()

  //   // get the username and password from the form fields
  //   const email = e.target.email.value // gets the value of the field in the submitted form with name='username'
  //   const password = e.target.password.value // gets the value of the field in the submitted form with name='password'
  //   console.log(email)
  //   // send form data to API to authenticate
  //   const formData = new FormData()
  //   formData.append("email", email)
  //   formData.append("password", password)
  //   console.log(formData)
  //   try
  //   {
  //     // send the request to the server api to authenticate
  //     const response = await axios({
  //       method: "post",
  //       // url: "https://my.api.mockaroo.com/user_info_saverie.json?key=6c488f80&__method=POST",
  //       params: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     // store the response data into the data state variable
  //     setStatus(response.data)
  //     // console.log(status)
  //     // console.log(status)
  //   }
  //   catch (err) {
  //     // throw an error
  //     // console.log("shit hro")
  //     throw new Error(err)
  //   }
  // }
  // // console.log(status)
  //   if (!status.success)

  const [response, setResponse] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // if the user's logged-in status changes, save the token we receive from the server and direct user to usermenu page
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.username}`);
      localStorage.setItem("token", response.token); // store the token into localStorage
      window.location.replace("http://localhost:3000/usermenu");
    }
  }, [response]);

  const handleSubmit = async (e) => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault();

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        email: e.target.email.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      };
      // send a POST request with the data to the server api to authenticate
      const response = await axios.post(
        "http://localhost:3001/signin-submit",
        requestData
      );
      // store the response data into the data state variable
      console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`);
      setResponse(response.data);
    } catch (err) {
      // request failed... user entered invalid credentials
      setErrorMessage(
        "You entered invalid credentials.  Try harder!  Check out the usernames in the server's user_data.js file."
      );
    }
  };

  //action="http://localhost:3001/signin-submit" method="POST"
  return (
    <div className="Signin">
      <HeaderTab pageTitle="Sign in" returnPath="/" />
      {/* onSubmit={handleSubmit} */}
      <form className="fields" onSubmit={handleSubmit}>
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
