import React from 'react';
import './menu-page.css';
import { useEffect, useState } from 'react';
import ImageCont from './bg-image';
import MenuCard from '../menu-card/menu-card';
import { Link } from 'react-router-dom'
import HeaderTab from '../header-tab/HeaderTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ButtonUI from'../button/button.js';
import data from './restaurant_menu.json';

let nobj = {};

const MenuPage = () => {
    const [totalCounter, setTotalCounter] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});

    const onItemCountChange = (val) =>{
        setTotalCounter(totalCounter+val);
    };

    const onItemSelect = (item) => {
        let prevItems = selectedItems;
        if (Object.keys(prevItems).includes(item['name'])){
            if (prevItems[item['name']]===1 && item['qty'] ===-1){
                delete prevItems[item['name']];
            }else{
                prevItems[item['name']]+=parseInt(item['qty']);
            }
        }else{
            prevItems[item['name']]=1;
        }
        setSelectedItems(prevItems);
        nobj = selectedItems;
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


    

    return (
        <>
            <HeaderTab pageTitle="Burger King" returnPath='/usermenu' />

            <ImageCont img = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burger-tour-1-1539986612.jpg'/>
            {/* <HorizontalMenu items = {menuItems}/> */}

            {menuItems.map(menuItems => (
                <div>
                    <div className='menuItems'>
                        <a id={menuItem}>
                            {menuItem}
                        </a>                        
                    </div>
                    <div>
                        {/* use this for API call: {repo[menuItem].map(itemList=>{ */}
                        {data[0][menuItem].map(itemList=>{
<<<<<<< HEAD
                            return (
                            <div>
                                {/* <CardFlip backtext="hello">
                                    <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price}/>
                                </CardFlip> */}
                                <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price} description="Lettuce, tomatoes, onions"/>
                                {/* <MenuCard menuCountUpdater = {onItemCountChange} img = {itemList.img} name= {itemList.name} price = {itemList.price}/> */}
                            </div>
                        )})}
=======
                            return <MenuCard menuCountUpdater = {onItemCountChange} selectionUpdater = {onItemSelect} img = {itemList.img} name= {itemList.name} price = {itemList.price}/>
                        })}
>>>>>>> 7b09cf6a097a83016481dd741e557f6feff2d92d
                    </div>           
                </div>                  
            ))}
           
            {totalCounter > 0 && (
                 <div className='floatBtn'>
                    <div className='floatBtnChild'> 
                    <Link to='/checkout'>     
                         <ButtonUI width='200px' radius='8px'>Claim</ButtonUI>
<<<<<<< HEAD
                     </Link>
                     
                     </div>
                 
=======
                     </div>    
>>>>>>> 7b09cf6a097a83016481dd741e557f6feff2d92d
                </div>
                
                

            )}
        </>
    );
}
 
export default MenuPage;


