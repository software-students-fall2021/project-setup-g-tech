import React from 'react';
import ReactDOM from 'react-dom';
import './menu-page.css';
import ImageCont from './bg-image';
import HorizontalMenu from '../scroll-bar/scroll-bar';
import MenuCard from '../menu-card/menu-card';
import { Link } from 'react-router-dom'
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream

const MenuPage = () => {
    const menuItems = ['Appetizers', 'Sides', 'Drinks', 'Dessert', 'Entrée', 'Sauces'];
    const menuCards = [
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>,
        <MenuCard  img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg' title="xyz" price = "$$"/>
=======
import axios from 'axios';
import ButtonUI from'../button/button.js';
import data from './restaurant_menu.json';


const MenuPage = () => {
    const [totalCounter, setTotalCounter] = useState(0);

    const onItemCountChange = (val) =>{
        setTotalCounter(totalCounter+val);
    };

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

>>>>>>> Stashed changes

    ]

    return (
        <>
<<<<<<< Updated upstream
            <HeaderTab pageTitle="Restaurant Name" returnPath = "/usermenu"/>

            <ImageCont img = 'https://image.shutterstock.com/shutterstock/photos/1113487829/display_1500/stock-photo-food-dine-fine-black-plate-dish-exclusive-elegant-modern-appetizer-meat-small-dinner-luxury-1113487829.jpg'/>
            <HorizontalMenu items = {menuItems}/>
=======
            <HeaderTab pageTitle="Burger King" returnPath='/usermenu' />

            <ImageCont img = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burger-tour-1-1539986612.jpg'/>
            {/* <HorizontalMenu items = {menuItems}/> */}
>>>>>>> Stashed changes

            {menuItems.map(menuItems => (
                <div>
<<<<<<< Updated upstream
                    <div className='menuItems'>{menuItems}</div>
                    {menuCards.map(menuCard => (
                        <div>{menuCard}</div>
                        
                        ))}
                    
=======
                    <div className='menuItems'>
                        <a id={menuItem}>
                            {menuItem}
                        </a>                        
                    </div>
                    <div>
                        {/* use this for API call: {repo[menuItem].map(itemList=>{ */}
                        {data[0][menuItem].map(itemList=>{
                            return (
                            <div>
                                {/* <CardFlip backtext="hello">
                                    <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price}/>
                                </CardFlip> */}
                                <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price} description="Lettuce, tomatoes, onions"/>
                                {/* <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price}/> */}
                            </div>
                        )})}
                    </div>           
                </div>                  
            ))}
           
            {totalCounter > 0 && (
                 <div className='floatBtn'>
                    <div className='floatBtnChild'> 
                    <Link to='/checkout'>     
                         <ButtonUI width='200px' radius='8px'>Claim</ButtonUI>
                     </Link>
                     
                     </div>
                 
>>>>>>> Stashed changes
                </div>
                
                

            ))}
        </>
    );
}
 
export default MenuPage;


