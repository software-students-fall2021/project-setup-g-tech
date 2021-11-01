// import HeaderTab from './components/header-tab/HeaderTab.js';
import { Link } from 'react-router-dom'
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import ButtonUI from '../button/button';
import './Register.css';

const Register = (props) => {
    return (
        <div className="Register">
             <HeaderTab pageTitle="Let's begin!" returnPath = "/"/>
             <div className="fields">
                <Input title="First Name" type='text' placeholder='Jane'/>
                <Input title="Last Name" type='text' placeholder='Miller'/>
                <Input title="Email" type='email' placeholder='name@example.com'/>
                <Input title="Password" type='password' placeholder='*******'/>
                <Input title="Re-enter Password" type='password' placeholder='*******'/>
             </div>
             {/* <Input title="Password" type='password' placeholder='*******'/> */}
             <div className='button'>
             <Link to='/usermenu'>
                <ButtonUI width='240px' radius='30px'><b>CONTINUE</b></ButtonUI>
            </Link>
             </div>
        </div>
    );
}

export default Register;