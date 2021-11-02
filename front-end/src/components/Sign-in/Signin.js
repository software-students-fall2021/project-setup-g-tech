// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import './signin.css';

const Signin = props => {
  // create state variables to hold username and password
  const [status, setStatus] = useState({}) // the API will return an object indicating the login status in a success field of the response object

  // if the user's logged-in status changes, call the setuser function that was passed to this component from the PrimaryNav component.
  useEffect(() => {
    // if the login was a success, call the setuser function that was passed to this component as a prop
    if (status.success) {
      console.log(`User successfully logged in: ${status.email}`)
      props.setuser(status)
    }
  }, [status])

  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    // get the username and password from the form fields
    const email = e.target.email.value // gets the value of the field in the submitted form with name='username'
    const password = e.target.password.value // gets the value of the field in the submitted form with name='password'
    console.log(email)
    // send form data to API to authenticate
    const formData = new FormData()
    formData.append("User_ID", 1)
    // formData.append("password", password)
    console.log(formData)
    try {
    console.log("heloooo")
      // send the request to the server api to authenticate
      const response = await axios({
        method: "get",
        url: "https://my.api.mockaroo.com/user_info_saverie.json?key=84c7cbc0",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      // store the response data into the data state variable
      console.log(response.data)
      setStatus(response.data)
      console.log(status.email)
    } catch (err) {
      // throw an error
      throw new Error(err)
    }
  }

    if (!status.success)
        return (
            <div className="Signin">
                <HeaderTab pageTitle="Sign in" returnPath = "/"/>
                <form className="fields" onSubmit={handleSubmit}>
                    {
                        //handle error condition
                    }
                    <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                    <Input title="Password" name="password" type='password' placeholder='*******'/>
                    <div className='button'>
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
                <p>
                    Server response (for debugging purposes):
                    <br />
                    <br />
                    {JSON.stringify(status, null, 2)}
                </p>
            </div>
        );
    // otherwise, if the user has successfully logged-in, redirect them to a different page
    // in this example, we simply redirect to the home page, but a real app would redirect to a page that shows content only available to logged-in users
    else return <Redirect to="/usermenu" />
}

export default Signin