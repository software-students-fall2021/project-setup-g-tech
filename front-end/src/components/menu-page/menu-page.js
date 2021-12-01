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
  const countToken = sessionStorage.getItem('totalCount')
  let stateNum = countToken ? JSON.parse(countToken) : 0
  const [totalCounter, setTotalCounter] = useState(stateNum);
  
  const jwtToken = localStorage.getItem('token')
  if (!jwtToken) {
    window.location.replace("http://localhost:3000/");
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
        if(prevItems[item["name"]] < item['qty_available']){
          prevItems[item["name"]] += parseInt(item["qty"]);
        }
        else{
          console.log('Added Max items to cart')
        }
        
      }
    } else {
      prevItems[item["name"]] = 1;
      previtemPrice[item["name"]] = item["price"];
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
    const res = await axios.get("http://localhost:3001/getmenu", {
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

  const handleClick = () => {
    sessionStorage.setItem("totalCount", JSON.stringify(totalCounter))
  }

  return (
    <>
      <HeaderTab pageTitle={docs.name} returnPath={'/usermenu'} />
      <ImageCont img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burger-tour-1-1539986612.jpg" />
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
                    return (
                      <MenuCard
                        menuCountUpdater={onItemCountChange}
                        selectionUpdater={onItemSelect}
                        name={item.title}
                        price={item.price}
                        description={item.description}
                        qty_available={item.quantity}
                      />
                    );
                  }
                })}
            </div>
          </div>
        ))}

      {totalCounter > 0 && (
        <div className="floatBtn">
          <div className="floatBtnChild">
            <Link to={"/checkout"}>
              <ButtonUI width="200px" radius="8px" onClick={handleClick}>
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
