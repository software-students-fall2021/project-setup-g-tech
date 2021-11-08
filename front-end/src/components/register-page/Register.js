// import HeaderTab from './components/header-tab/HeaderTab.js';
import { Link } from 'react-router-dom'
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import ButtonUI from '../Button/button';
import './Register.css';

const Register = (props) => {
    return (
        <div className="Register">
             <HeaderTab pageTitle="Let's begin!" returnPath = "/"/>
             <div className="fields">
             <form action="http://localhost:3001/register-submit" method="POST">
                <Input title="First Name" name="first_name" type='text' placeholder='Jane'/>
                <Input title="Last Name" name="last_name" type='text' placeholder='Miller'/>
                <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                <Input title="Password" name="password" type='password' placeholder='*******'/>
                <Input title="Re-enter Password"  name="repassword" type='password' placeholder='*******'/>
                {/* <p className="pmatch" >Passwords do not match</p> */}
             {/* <Input title="Password" type='password' placeholder='*******'/> */}
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