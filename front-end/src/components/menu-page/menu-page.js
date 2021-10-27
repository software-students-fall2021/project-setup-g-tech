import React from 'react';
import ReactDOM from 'react-dom';
import './menu-page.css';
import ImageCont from './bg-image';
import HorizontalMenu from '../scroll-bar/scroll-bar';
import MenuCard from '../menu-card/menu-card';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuPage = () => {
    const menuItems = ['Appetizers', 'Sides', 'Drinks', 'Dessert', 'Entrée', 'Sauces'];

    return (
        ReactDOM.render(
            <React.StrictMode>
                {/* <HeaderTab/> */}

                <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
                <HorizontalMenu items = {menuItems}/>
                <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>
                <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

                <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>
                <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

                <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>

            </React.StrictMode>,
            document.getElementById('root')
          )
        
        
        

     );
}
 
export default MenuPage;


