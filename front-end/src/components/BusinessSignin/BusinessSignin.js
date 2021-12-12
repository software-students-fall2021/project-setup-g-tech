import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import React, { useState, useEffect } from "react"
import axios from "axios"

const BusinessSignin = props => {
  const [response, setResponse] = useState({})
  const [error, setError] = useState(' ');

  useEffect(() => {
    // if the restaurant is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`Restaurant successfully logged in: ${response.email}`)
      localStorage.setItem("token", response.token) // store the token into localStorage
      localStorage.setItem("rest_id", response.id)
      window.location.replace("/business-menu")
    }
  }, [response])

  const handleSubmit = async e => {
    e.preventDefault()

    if (e.target.email.value == ''){
      setError("Please enter your email.");
    }
    if (e.target.password.value == ''){
      setError("Please enter your password.");
    }
    const requestData = {
      email: e.target.email.value, // gets the value of the field in the submitted form with name='username'
      password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
    }
    // send a POST request with the data to the server api to authenticate
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/business-signin-submit`,
      requestData
    )
    setResponse(res.data)
  }
    
      return (
        <div className="Signin">
          <HeaderTab pageTitle="Sign in" returnPath = "/business"/>
          <form className="fields" onSubmit={handleSubmit} method="POST" style={{paddingTop: '16%'}}>
            <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
            <Input title="Password" name="password" type='password' placeholder='*******'/>
            <div class="errorMessage">{error}</div>

            <div className='button'>
                <Input className="submitButton" type="submit" value="SIGN IN"></Input>
            </div>
          </form>
        </div>
      );
}

export default BusinessSignin