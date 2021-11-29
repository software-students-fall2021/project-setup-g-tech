// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import { Navigate, useParams } from "react-router"
import { Redirect } from "react-router-dom"
import axios from "axios"
import './signin.css';

const Signin = props => {
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
  
  let {urlParams} = useParams('');
  console.log(urlParams)
  const [response, setResponse] = useState({})

   // create state variables to hold username and password
   const [errorMessage, setErrorMessage] = useState("")
 
   // if the user got here by trying to access our Protected page, there will be a query string parameter called 'error' with the value 'protected'
  //  useEffect(() => {
  //    const qsError = urlParams.get("error") // get any 'error' field in the URL query string
  //    if (qsError === "protected")
  //      setErrorMessage("Please log in to view our fabulous protected content.")
  //  }, []) // eslint-disable-line react-hooks/exhaustive-deps
 
  
  useEffect(() => {
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.email}`)
      localStorage.setItem("token", response.token)
      window.location.replace("http://localhost:3000/usermenu")
    }
  }, [response])

  const handleSubmit = async e => {
    e.preventDefault()
    const requestData = {
      email: e.target.email.value, 
      password: e.target.password.value,
    }
    const res = await axios.post(
      'http://localhost:3001/signin-submit',
      requestData
    )
    setResponse(res.data)
  }

      return (
        <div className="Signin">
          <HeaderTab pageTitle="Sign in" returnPath = "/"/>
          {/* onSubmit={handleSubmit} */}
          <form className="fields" onSubmit={handleSubmit} method="POST">
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
}

export default Signin