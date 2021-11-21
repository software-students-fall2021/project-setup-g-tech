import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';

const BusinessRegister = (props) => {
    return (
        <div className="Register">
             <HeaderTab pageTitle="Business Registration" returnPath = "/business"/>
             <div className="fields">
                <form action="http://localhost:3001/register-submit" method="POST">
                    <Input title="First Name" name="first_name" type='text' placeholder='Jane'/>
                    <Input title="Last Name" name="last_name" type='text' placeholder='Miller'/>
                    <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                    <Input title="Password" name="password" type='password' placeholder='*******'/>
                    <Input title="Re-enter Password"  name="repassword" type='password' placeholder='*******'/>
                    <div className='button'>
                        <Input className="submitButton" type="submit" value="CREATE ACCOUNT"></Input>
                    </div>
                </form>
             </div>
        </div>
    );
}

export default BusinessRegister;