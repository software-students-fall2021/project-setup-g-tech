import './Checkout.css';
import HeaderTab from '../header-tab/HeaderTab';

const Checkout = (props) => {
    return (
        <div className='Checkout'>
            <HeaderTab pageTitle='Check Out' />
            <h2>Order Confirmation</h2>
        </div>
    );
}

export default Checkout;