import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';

const BusinessRegister = (props) => {
    return (
        <div className="Register">
             <HeaderTab pageTitle="Business Registration" returnPath = "/business"/>
             <div className="fields">
                <form action="http://localhost:3001/business-register-submit" method="POST">
                    <Input title="Name" name="name" type='text' placeholder='Top Thai'/>
                    <Input title="Email" name="email" type='email' placeholder='name@example.com'/>
                    <Input title="Location" name="location" type='text' placeholder='310, 23rd St, 3rd Ave'/>
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