import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import React, { useState, useEffect } from "react"

const BusinessSignin = props => {
    
      return (
        <div className="Signin">
          <HeaderTab pageTitle="Sign in" returnPath = "/business"/>
          <form className="fields" action="http://localhost:3001/signin-submit" method="POST">
            <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
            <Input title="Password" name="password" type='password' placeholder='*******'/>
            <div className='button'>
                <Input className="submitButton" type="submit" value="SIGN IN"></Input>
            </div>
          </form>
        </div>
      );
}

export default BusinessSignin