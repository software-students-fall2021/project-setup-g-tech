import React from "react";
import Timer from "../Timer/Timer";
import HeaderTab from "../header-tab/HeaderTab";
import ButtonUI from "../ButtonUI/ButtonUI";
import "./PageTimer.css";
import CancelOrder from "../CancelOrder/CancelOrder";
import $ from "jquery";
import url from "url";
import axios from "axios";

function PageTimer() {
  const timer = sessionStorage.getItem("timer");

  // get the User Id from the URL
  const params = new URLSearchParams(window.location.search);
  const user = params.get("id");
  const returnPath = url.format({
    pathname: "/usermenu",
  });

  // when "cancel" button is clicked, do a post request to change the status of the order to canceled and go back to usermenu page
  const orderCancel = () => {
    axios.post("http://localhost:3001/updateorderstatus", {
      action: "change",
      id: user,
      order_status: "Canceled",
    });

    $(".cancel-order-screen").css("display", "block");
    setTimeout(function () {
      window.location.replace(returnPath);
    }, 2000);
  };

  return (
    <div className="pageTimerContainer">
      <HeaderTab pageTitle="Order Confirmed" returnPath="/checkout" />

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
