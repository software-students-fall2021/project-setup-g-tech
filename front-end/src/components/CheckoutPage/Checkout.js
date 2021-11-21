import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderTab from "../header-tab/HeaderTab";
import Billitem from "../BillItem/Billitem";
import TimerSelect from "../TimerSelect/TimerSelect";
import ButtonUI from "../ButtonUI/ButtonUI";
import "./Checkout.css";
import url from "url";

const Checkout = (props) => {
  let cartItems = JSON.parse(sessionStorage.getItem("cart"));
  let cartItemsPrice = JSON.parse(sessionStorage.getItem("price"));
  let sum = 0;

  const params = new URLSearchParams(window.location.search);
  const user = params.get("id");
  const returnPath = url.format({
    pathname: "/menu",
    query: { id: user },
  });

  const timerPath = url.format({
    pathname: "/pagetimer",
    query: { id: user },
  });

  return (
    <div className="Checkout">
      <HeaderTab pageTitle="Check Out" returnPath={returnPath} />
      <div className="heading">
        <h2 className="order-confirm">Order Confirmation</h2>
      </div>

      <div className="Items">
        {Object.entries(cartItems).map(([key, value]) =>
          Object.entries(cartItemsPrice).map(([name, price]) => {
            let test = key === name;
            if (test) {
              sum += value * price;
              return <Billitem quantity={value} itemName={key} price={price} />;
            }
          })
        )}
        ;
        <br />
        <Billitem itemName="Total" price={sum} />
      </div>

      <h4 className="pick-up">Pick-up Time</h4>
      <TimerSelect />
      {/* <div className='floatBtn'> */}
      <div className="checkoutbutt">
        <Link to={timerPath}>
          <ButtonUI radius="8px" width="230px">
            {" "}
            Checkout{" "}
          </ButtonUI>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Checkout;
