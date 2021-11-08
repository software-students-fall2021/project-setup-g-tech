import React from "react";
import Timer from "../Timer/Timer";
import HeaderTab from "../header-tab/HeaderTab";
import ButtonUI from "../Button/button";
import "./PageTimer.css";
import CancelOrder from "../CancelOrder/CancelOrder";
import $ from "jquery";

function PageTimer() {
  const timer = sessionStorage.getItem("timer");

  const orderCancel = () => {
    $(".cancel-order-screen").css("display", "block");
    setTimeout(function () {
      window.location.replace("/usermenu");
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
