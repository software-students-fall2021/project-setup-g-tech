// import HeaderTab from './components/header-tab/HeaderTab.js';
import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import ButtonUI from '../button/button';
import './signin.css';

const Signin = (props) => {
    return (
        <div className="Signin">
             <b><HeaderTab pageTitle="Sign in"/></b>
             <div className="fields">
                <Input title="Email" type='email' placeholder='name@example.com'/>
                <Input title="Password" type='password' placeholder='*******'/>
             </div>
             <div className='button'>
                <ButtonUI width='240px' radius='30px'><b>Sign in</b></ButtonUI>
             </div>
        </div>
    );
}

export default Signin;