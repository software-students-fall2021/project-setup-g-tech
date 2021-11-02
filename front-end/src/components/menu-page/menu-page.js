import React from 'react';
import './menu-page.css';
import { useEffect, useState } from 'react';
import ImageCont from './bg-image';
import HorizontalMenu from '../scroll-bar/scroll-bar';
import MenuCard from '../menu-card/menu-card';
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';





const MenuPage = () => {
    const menuItems = ['Appetizers', 'Sides', 'Drinks', 'Dessert', 'Entrée', 'Sauces'];
    const menuCards = [
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

    ]

    const [repo, setRepo] = useState([]);
    const getRepo = () => {
        axios.get('https://my.api.mockaroo.com/restaurant_info.json?key=84c7cbc0')
        .then((response) =>{
            console.log(response);
            const myRepo =  response.data;
            setRepo(myRepo);
        })
    }
    useEffect(() => getRepo(), [])


    return (
        <>

            <HeaderTab pageTitle="Saverie"/>

            <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
            <HorizontalMenu items = {menuItems}/>
            {repo.map((repos)=>(
                <MenuCard img = {repos.menu.item_image} title = {repos.menu.item_name} price = {repos.menu.item_price}/>
            ))}
                  

            {menuItems.map(menuItems => (
                <div>
                    <div className='menuItems'>{menuItems}</div>
                    {menuCards.map(menuCard => (
                        <div>{menuCard}</div>
                        
                        ))}
            
                </div>
                
                

            ))}
        </>
    );
}
 
export default MenuPage;


