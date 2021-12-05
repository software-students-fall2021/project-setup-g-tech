import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import { useState, useEffect } from 'react'
import axios from 'axios'

const BusinessRegister = (props) => {
    const [response, setResponse] = useState({})
    const [error, setError] = useState(' ');

    useEffect(() => {
      if (response.success) {
        console.log(`Business successfully registered: ${response.email}`)
        // localStorage.setItem("token", response.token)
        window.location.replace("http://localhost:3000/business-signin")
      }
    }, [response])
  
    const handleSubmit = async e => {
      e.preventDefault()
      
      if (e.target.repassword.value != e.target.password.value){
        setError("*Passwords do not match.");
      }
      if (e.target.repassword.value == ''){
        setError("*Please re-enter your password.");
      }
      if (e.target.password.value == ''){
        setError("*Please enter your password.");
      }
      if (e.target.location.value == ''){
        setError("*Please enter your location.");
      }
      if (e.target.email.value == ''){
        setError("*Please enter your business email.");
      }
      if (e.target.name.value == ''){
        setError("*Please enter your business name.");
      }

      // else {
        const requestData = {
          name: e.target.name.value,
          location: e.target.location.value,
          email: e.target.email.value,
          password: e.target.password.value,
          repassword: e.target.repassword.value
        }
        const res = await axios.post(
          'http://localhost:3001//business-register-submit',
          requestData
        )
        setResponse(res.data)
      // }
    }

    return (
        <div className="Register">
             <HeaderTab pageTitle="Business Registration" returnPath = "/business"/>
             <div className="fields">
                <form onSubmit={handleSubmit} method="POST">
                    <Input title="Name" name="name" type='text' placeholder='Top Thai'/>
                    <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                    <Input title="Location" name="location" type='text' placeholder='310, 23rd St, 3rd Ave'/>
                    <Input title="Password" name="password" type='password' placeholder='*******'/>
                    <Input title="Re-enter Password"  name="repassword" type='password' placeholder='*******'/>
                    <Input title = "Upload Business Logo" type="file" name="file" />
                    <div class="errorMessage">{error}</div>
                    <div className='button'>
                        <Input className="submitButton" type="submit" value="CREATE ACCOUNT"></Input>
                    </div>
                </form>
             </div>
        </div>
    );
}

export default BusinessRegister;