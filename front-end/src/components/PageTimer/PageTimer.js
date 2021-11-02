import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import HeaderTab from "../header-tab/HeaderTab";
import ButtonUI from "../button/button";
import "./PageTimer.css";

function PageTimer() {
  const timer = sessionStorage.getItem("timer")

  return (
    <div className="pageTimerContainer">
      <HeaderTab pageTitle="Order Confirmed" returnPath='/checkout'/>

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
      <div className='cancelOrderBtn'>
        <Link to="/usermenu">
          <ButtonUI radius = '30px' width= '130px'> Cancel </ButtonUI>
        </Link>
      </div>  
    </div>
  );
}

export default PageTimer;
