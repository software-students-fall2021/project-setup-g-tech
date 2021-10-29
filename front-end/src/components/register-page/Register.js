// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import ButtonUI from '../button/button';
import './Register.css';

const Register = (props) => {
    return (
        <div className="Register">
             {/* <HeaderTab pageTitle='Register'/>  */}
             <HeaderTab pageTitle="Let's begin!"/>
             <Input title="Email" type='email' placeholder='name@example.com'/>
             {/* <Input title="Password" type='password' placeholder='*******'/> */}
             <ButtonUI width='50' radius='10'>Register</ButtonUI>
        </div>
    );
}

export default Register;