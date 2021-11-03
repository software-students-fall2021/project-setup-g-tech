import React from 'react';
import './menu-page.css';
import { useEffect, useState } from 'react';
import ImageCont from './bg-image';
import MenuCard from '../menu-card/menu-card';
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ButtonUI from'../button/button.js';

import data from './restaurant_menu.json';



const MenuPage = () => {
    const [totalCounter, setTotalCounter] = useState(0);

    const onItemCountChange = (val) =>{
        setTotalCounter(totalCounter+val);
    };
    const menuCards = [
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

    ]


    // code when using API
    // const [repo, setRepo] = useState([]);
    // const getRepo = () => {
    //     axios.get('https://my.api.mockaroo.com/restaurant_menu.json?key=84c7cbc0&__method=POST')
    //     .then((response) =>{
    //         console.log(response);
    //         const myRepo =  response.data;
    //         setRepo(myRepo);
    //     })
    // }
 
    // useEffect(() => getRepo(), [])
    // let menuItems =  Object.keys(repo);

    // Placeholder code for using data

    let menuItems =  Object.keys(data[0]);



    return (
        <>


            <HeaderTab pageTitle="Saverie"/>

            <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
            {/* <HorizontalMenu items = {menuItems}/> */}

            <div  className='scrollmenu'>
           {  menuItems.map((menuItems) =>
                <ul className='menuItem02'>
                    <a  className='menuItem' href= {"#" + menuItems}>{menuItems}</a>
                </ul>
            )};
             </div>
            
            
                  

            {menuItems.map(menuItem => (
                <div>
                    <div className='menuItems'>
                        <a id={menuItem}>
                        
                        {menuItem}
                        </a>
                        
                    </div>
                    {console.log(data[0].menuItem)}
{/*    
                    {data[0].map((data)=>(
                     
                       <div>
                            <div className='menuItems'>{data}</div>

                           {data[0].map((category)=>(
                            <MenuCard img = {category.img} title = {category.name} price = {category.price}/>
                            ))};

                       </div> 
                    ))}; */}

                    {menuCards.map(menuCard => (
                        <div>{menuCard}</div>    
                    ))}
                </div>
                
                        
            ))}
           
            {totalCounter > 0 && (
                 <div className='floatBtn'>
                    <div className='floatBtnChild'>              
                         <ButtonUI width='200px' radius='8px'>Claim</ButtonUI>
                     </div>
                 
                </div>
            )}
           
            
           
        
       
        </>
    );
}
 
export default MenuPage;


