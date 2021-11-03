import React from 'react';
import './menu-page.css';
import { useEffect, useState } from 'react';
import ImageCont from './bg-image';
import HorizontalMenu from '../scroll-bar/scroll-bar';
import MenuCard from '../menu-card/menu-card';
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ButtonUI from'../button/button.js';





const MenuPage = () => {
    const [totalCounter, setTotalCounter] = useState(0);

    const onItemCountChange = (val) =>{
        setTotalCounter(totalCounter+val);
    };
    // const  menuItems= ['Appetizers', 'Sides', 'Drinks', 'Dessert', 'Entrée', 'Sauces'];
    const menuCards = [
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard menuCountUpdater = {onItemCountChange} img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

    ]

    const [repo, setRepo] = useState([]);
    const getRepo = () => {
        axios.get('https://my.api.mockaroo.com/restaurant_menu.json?key=84c7cbc0&__method=POST')
        .then((response) =>{
            console.log(response);
            const myRepo =  response.data;
            setRepo(myRepo);
        })
    }
 
    useEffect(() => getRepo(), [])
    const menuItems =  Object.keys(repo);



    return (
        <>


            <HeaderTab pageTitle="Saverie"/>

            <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
            <HorizontalMenu items = {menuItems}/>
            
            
                  

            {menuItems.map(menuItem => (
                <div>
                    <div className='menuItems'>{menuItem}</div>
                    {/* {repo.map((repos)=>(
                        console.log('repos')
                       <div>
                           {repos.map((category)=>(
                            <MenuCard img = {repos.category.img} title = {repos.category.name} price = {repos.category.price}/>
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


