import React, { useEffect } from "react"
import { Redirect } from "react-router-dom"
// import logo from './logo.svg';

const Logout = props => {
  // log the user out by setting the user to a blank object
  // we assume that a setuser function has been passed as a prop to this component
  useEffect(() => {
    props.setuser({}) // set the user data to a blank object
  }, [])

  // send the user to the home screen
  return <Redirect to="/" />
}

export default Logout