import React from 'react';
import { Link , useLocation} from "react-router-dom";
import HeaderTab from '../header-tab/HeaderTab';
import Billitem from '../bill-item/Billitem';
import TimerSelect from '../TimerSelect/TimerSelect';
import ButtonUI from "../button/button";
import './Checkout.css';

const Checkout = (props) => {
        let cartItems = JSON.parse(sessionStorage.getItem("cart"));
        let cartItemsPrice = JSON.parse(sessionStorage.getItem("price"));
        let sum  = 0;
        return (

            <div className='Checkout'>
                <HeaderTab pageTitle='Check Out' returnPath = "/menu"/>
                <div className='heading'>
                    <h2 className="order-confirm">Order Confirmation</h2>
                </div>

                <div className='Items'> 
                
                
                {Object.entries(cartItems).map(([key, value]) =>
                    Object.entries(cartItemsPrice).map(([name, price]) =>{
                        let test = key===name;
                        if(test)
                            {
                                sum += value*price ;  
                                return <Billitem quantity = {value} itemName={key} price={price}/>
                            }                           
                    })             
                )};    
                    <br/>
                    <Billitem itemName='Total' price={sum}/>
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