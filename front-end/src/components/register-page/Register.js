import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Register.css';

const Register = (props) => {
    const [response, setResponse] = useState({})
    const [error, setError] = useState(' ');

    useEffect(() => {
      if (response.success && response.token) {
        console.log(`User successfully registered: ${response.email}`)
        localStorage.setItem("token", response.token)
        window.location.replace('/usermenu')
      }
    }, [response])
  
    const handleSubmit = async e => {
      e.preventDefault()
      if (e.target.repassword.value != e.target.password.value){
        setError("Passwords do not match.");
      }
      if (e.target.repassword.value == ''){
        setError("Please re-enter your password.");
      }
      if (e.target.password.value == ''){
        setError("Please enter your password.");
      }
      
      if (e.target.email.value == ''){
        setError("Please enter your email.");
      }
      if (e.target.last_name.value == ''){
        setError("Please enter your last name.");
      }
      if (e.target.first_name.value == ''){
        setError("Please enter your first name.");
      }
      // else {
        const requestData = {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          repassword: e.target.repassword.value
        }
        const res = await axios.post(
          `${process.env.REACT_APP_URL}/register-submit`,
          requestData
        )
        setResponse(res.data)
      // }
    }

    return (
        <div className="Register">
             <HeaderTab pageTitle="Let's begin!" returnPath = "/"/>
             <div className="fields">
             <form onSubmit={handleSubmit} method="POST">
                <Input title="First Name" name="first_name" type='text' placeholder='Jane'/>
                <Input title="Last Name" name="last_name" type='text' placeholder='Miller'/>
                <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                <Input title="Password" name="password" type='password' placeholder='*******'/>
                <Input title="Re-enter Password"  name="repassword" type='password' placeholder='*******'/>
                {/* <p className="pmatch" >Passwords do not match</p> */}
             {/* <Input title="Password" type='password' placeholder='*******'/> */}
             <div class="errorMessage">{error}</div>
             <div className='button'>
             {/* <Link to='/signin'> */}
                <Input className="submitButton" type="submit" value="CREATE ACCOUNT"></Input>
            {/* </Link> */}
             </div>
             </form>
             </div>
        </div>
    );
}

export default Register;