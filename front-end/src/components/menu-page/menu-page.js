import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ImageCont from './bg-image';
import MenuCard from '../menu-card/menu-card';
import HeaderTab from '../header-tab/HeaderTab';
import axios from 'axios';
import ButtonUI from'../ButtonUI/ButtonUI';
import data from './restaurant_menu.json';
import url from 'url'
import './menu-page.css';

const MenuPage = () => {


    const [totalCounter, setTotalCounter] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});
    const [selectedItemsPrice, setSelectedItemsPrice] = useState({});

    const params = new URLSearchParams(window.location.search);
    const user = params.get('id');
    const returnPath = url.format({
        pathname:"/usermenu",
        query: { id: user}
    })


    const onItemCountChange = (val, item) =>{
        setTotalCounter(totalCounter+val);
    };

    const onItemSelect = (item) => {
        let prevItems = selectedItems;
        let previtemPrice = selectedItemsPrice;

        if (Object.keys(prevItems).includes(item['name'])){
            if (prevItems[item['name']]===1 && item['qty'] ===-1){
                delete prevItems[item['name']];  
                delete previtemPrice[item['name']] ;
                  
            }else{
                prevItems[item['name']]+=parseInt(item['qty']);
            }
        }else{
            prevItems[item['name']]=1;
            previtemPrice[item['name']] = item['price'];
        }
        setSelectedItems(prevItems);
        setSelectedItemsPrice(previtemPrice);
        sessionStorage.setItem("cart",JSON.stringify(selectedItems));
        sessionStorage.setItem("price",JSON.stringify(selectedItemsPrice));
    };
    
    // Placeholder code for using data
    // let menuItems =  Object.keys(data[0]);

    // API Backend get data
    const [data, setData] = useState([])
 
    const fetchData = async () => {
       const res = await axios.get('http://localhost:3001/menu', {
          params: {
             id: user
          }
       });
       setData(res.data);
    }
    useEffect(fetchData, []);
    let menuItems =  Object.keys(data);

    

    return (
        <>
            <HeaderTab pageTitle="Burger King" returnPath={returnPath} />            
            <ImageCont img = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burger-tour-1-1539986612.jpg'/>
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
                    <div>
                        {/* use this for API call: {data[menuItem].map(itemList=>{ */}
                        {/* use this for using db.json file {data[0][menuItem].map(itemList=>{ */}
                        
                        {data[menuItem].map(itemList=>{
                      
                            return <MenuCard menuCountUpdater = {onItemCountChange} selectionUpdater = {onItemSelect} img = {itemList.img} name= {itemList.name} price = {itemList.price} description = {itemList.description} qty_available = {itemList.qty_available}/>
                        })}
                    </div>           
                </div>                  
            ))}
            {totalCounter > 0 && (
                 <div className='floatBtn'>
                    <div className='floatBtnChild'> 
                    <Link to='/checkout'>
                         <ButtonUI width='200px' radius='8px' >Claim</ButtonUI>
                    </Link>
                     </div>    
                </div>
            )}
            {/* <Link to={{pathname: '/checkout', cart}}></Link> */}
        </>
    );
}
 
export default MenuPage;
