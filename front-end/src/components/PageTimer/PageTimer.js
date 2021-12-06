import React, { useEffect } from "react";
import Timer from "../Timer/Timer";
import HeaderTab from "../header-tab/HeaderTab";
import ButtonUI from "../ButtonUI/ButtonUI";
import "./PageTimer.css";
import CancelOrder from "../CancelOrder/CancelOrder";
import $ from "jquery";
import axios from "axios";

function PageTimer() {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    window.location.replace("/");
  }

  const timer = sessionStorage.getItem("timer");
  const rest_id = localStorage.getItem("rest_id");

  let cartItems = JSON.parse(sessionStorage.getItem("cart"));
  const cartInfo = {
    action: "cancel" ,
    itemNum: cartItems,
    rest_id: rest_id,
  }
  // const reqCancel = { } .;
  const header = { headers: { Authorization: `JWT ${jwtToken}` } };

  // when "cancel" button is clicked, do a post request to change the status of the order to canceled and go back to usermenu page
  const updateHistory = async () => {
    const res = await axios.post(

      `${process.env.REACT_APP_URL}/updateorderstatus`,
       cartInfo,
      header
    );
  };

  const orderCancel = () => {
    updateHistory();
    $(".cancel-order-screen").css("display", "block");
    setTimeout(function () {
      window.location.replace("/usermenu");
    }, 2000);
  };

  return (
    <div className="pageTimerContainer">
      <HeaderTab pageTitle="Order Confirmed" returnPath="/usermenu" />

      <div className="timerContent">
        <p className="successMsg">
          You order has been successfully placed! Please collect it at your
          earliest convenience.
        </p>

        <Timer pickUpTime={timer} />

        <p className="msgAboutCancel">
          If you are unable to collect your order within the given time, it will
          automatically be cancelled. If you know you are unable to collect it,
          please cancel the order.
        </p>
      </div>
      <div className="checkoutbutt">
        <ButtonUI radius="8px" width="230px" onClick={orderCancel}>
          {" "}
          Cancel Order{" "}
        </ButtonUI>
      </div>
      <div className="cancel-order-screen">
        <CancelOrder />
      </div>
    </div>
  );
}

export default PageTimer;
