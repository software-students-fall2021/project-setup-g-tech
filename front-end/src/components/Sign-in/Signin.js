// import HeaderTab from './components/header-tab/HeaderTab.js';
import { Link } from 'react-router-dom'
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import ButtonUI from '../button/button';
import './signin.css';

const Signin = (props) => {
    return (
        <div className="Signin">
             <HeaderTab pageTitle="Sign in" returnPath = "/"/>
             <div className="fields">
                <Input title="Email" type='email' placeholder='name@example.com'/>
                <Input title="Password" type='password' placeholder='*******'/>
             </div>
             <div className='button'>
             <Link to='/usermenu'>
                <ButtonUI width='240px' radius='30px'><b>Sign in</b></ButtonUI>
            </Link>
             </div>
        </div>
    );
}

export default Signin;