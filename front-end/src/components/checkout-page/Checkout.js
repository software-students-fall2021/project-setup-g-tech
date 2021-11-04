import React from 'react';
import { Link , useLocation} from "react-router-dom";
import HeaderTab from '../header-tab/HeaderTab';
import Billitem from '../bill-item/Billitem';
import TimerSelect from '../TimerSelect/TimerSelect';
import ButtonUI from "../button/button";
import './Checkout.css';

const Checkout = (props) => {
        const cartItems = JSON.parse(sessionStorage.getItem("cart"));
        return (

            <div className='Checkout'>
                <HeaderTab pageTitle='Check Out' returnPath = "/menu"/>
                <div className='heading'>
                    <h2 className="order-confirm">Order Confirmation</h2>
                </div>
                {console.log('cartItems',cartItems)}

                <div className='Items'> 
                {  Object.entries(cartItems).map(([key, value]) =>
                    <Billitem quantity = {value} itemName={key} price={props.price}/>
                    )};
                    <br/>
                    <Billitem itemName='Total' price='3.99'/>
                </div>
    
                <h4 className="pick-up">Pick-up Time</h4>
                <TimerSelect />
                {/* <div className='floatBtn'> */}
                    <div className='checkoutbutt'> 
                        <Link to="/PageTimer">
                            <ButtonUI radius = '8px' width= '230px'> Checkout </ButtonUI>
                        </Link>
                    </div>
                {/* </div> */}
    
            </div>
        )

    

}



export default Checkout;