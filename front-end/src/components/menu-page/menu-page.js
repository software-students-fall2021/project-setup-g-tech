import React from 'react';
import ReactDOM from 'react-dom';
import './menu-page.css';
import ImageCont from './bg-image';
import HorizontalMenu from '../scroll-bar/scroll-bar';
import MenuCard from '../menu-card/menu-card';
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuPage = () => {
    const menuItems = ['Appetizers', 'Sides', 'Drinks', 'Dessert', 'Entrée', 'Sauces'];
    const menuCards = [
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

    ]

    return (
        <>
            <HeaderTab pageTitle="Restaurant Name" returnPath = "/usermenu"/>

            <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
            <HorizontalMenu items = {menuItems}/>

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


