import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageCont from "./bg-image";
import MenuCard from "../menu-card/menu-card";
import HeaderTab from "../header-tab/HeaderTab";
import axios from "axios";
import ButtonUI from "../ButtonUI/ButtonUI";
import "./menu-page.css";

const MenuPage = () => {
  var cover_img = ''
  const [totalCounter, setTotalCounter] = useState(0);
  let src = ''
  const jwtToken = localStorage.getItem('token')
  if (!jwtToken) {
    window.location.replace("/");
  }

  const onItemCountChange = (val, item) => {
      setTotalCounter(totalCounter + val);
  };

  const onItemSelect = (item) => {
    let prevItems = sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")): {};
    let previtemPrice =  sessionStorage.getItem("cart") ? JSON.parse(sessionStorage.getItem("price")):{};
    console.log('prevItems Before',prevItems)
    if (Object.keys(prevItems).includes(item["name"])) {
      if (prevItems[item["name"]] === 1 && item["qty"] === -1) {
        delete prevItems[item["name"]];
        delete previtemPrice[item["name"]];
      } else {
        if(prevItems[item["name"]] < item['qty_available'] && item['qty_available']>0){
          prevItems[item["name"]] += parseInt(item["qty"]);
        }
        else{
          console.log('Added Max items to cart')
        }
        
      }
    } else {
      if(item['qty_available']>0){
        prevItems[item["name"]] = 1;
        previtemPrice[item["name"]] = item["price"];
    }
    else{
      console.log('Added Max items to cart')
    }
    }
    sessionStorage.setItem("cart", JSON.stringify(prevItems));
    sessionStorage.setItem("price", JSON.stringify(previtemPrice));
  };
  // ======================================================
  // add restaurants menu from backend
  // fetch data of all restaurants
  const _id = localStorage.getItem("rest_id");
  const [docs, setResData] = useState([]);
  const fetchResData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/getmenu`, {
      headers: { Authorization: `JWT ${jwtToken}`, rest_id: _id },
    });
    setResData(res.data);
    sessionStorage.setItem("rest_name", JSON.stringify(res.data.name))
  };
  useEffect(fetchResData, []);
  let items = docs.items;
  const menu_item_arr = [];
  items &&
    items.map((item) => {
      if (!menu_item_arr.includes(item.type)) menu_item_arr.push(item.type);
    });
  // ======================================================

 

  let cover_photo = ''
  try{
    cover_photo = (require("../../uploads/"+ docs.cover_image).default)
    console.log(docs.cover_image)
  }
  catch(err){
    cover_photo = (require("../../images/not_found.jpeg").default)
  }

  return (
    <>

      <HeaderTab pageTitle={docs.name} returnPath={'/usermenu'} />

      {/* <ImageCont img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burger-tour-1-1539986612.jpg" /> */}
      <ImageCont img={cover_photo} />

      <div className="scrollmenu">
        {menu_item_arr &&
          menu_item_arr.map((menuItems) => (
            <ul className="menuItem02">
              <a className="menuItem" href={"#" + menuItems}>
                {menuItems}
              </a>
            </ul>
          ))}
        ;
      </div>
      {menu_item_arr &&
        menu_item_arr.map((menuItem) => (
          <div>
            <div className="menuItems">
              <a id={menuItem}>{menuItem}</a>
            </div>
            <div>
              {items &&
                items.map((item) => {
                  if (item.type == menuItem) {
                    try{
                      src = (require("../../uploads/menuImages/" + item.image).default)
                      }
                      catch(err){
                        src = ((require("../../images/not_found.jpeg").default));
                      }
                    return (
                      <MenuCard
                        menuCountUpdater={onItemCountChange}
                        selectionUpdater={onItemSelect}
                        name={item.title}
                        price={item.price}
                        description={item.description}
                        qty_available={item.quantity}
                        image = {src}
                        // image = {"https://picsum.photos/200"}
                        // image = {require("../../uploads/menuImages/" + item.image).default}
                      />
                    );
                  }
                })}
            </div>
          </div>
        ))}

        { sessionStorage.getItem("cart") && Object.keys(JSON.parse(sessionStorage.getItem("cart"))).length > 0 &&(
        <div className="floatBtn">
          <div className="floatBtnChild">
            <Link to={"/checkout"}>
              <ButtonUI width="200px" radius="8px">
                Claim
              </ButtonUI>
            </Link>
          </div>
        </div>
      )}
      {/* <Link to={{pathname: '/checkout', cart}}></Link> */}
    </>
  );
};

export default MenuPage;
