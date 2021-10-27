import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Timer from "../Timer/Timer";
import "./PageTimer.css";

function PageTimer() {
  return (
    <div className="pageTimerContainer">
      <div className="timerHeading">
        <Link to='/usermenu'> 
          <p className="goBack"> &lt; </p>
        </Link>
        <h1 className="timerTitle"> Order Confirmed </h1>
      </div>

      <div className="timerContent">
        <p className="successMsg">
          You order has been successfully placed! Please collect it at your
          earliest convenience.
        </p>

        <Timer pickUpTime="10" />

        <p className="msgAboutCancel">
          If you are unable to collect your order within the given time, it will
          automatically be cancelled. If you know you are unable to collect it,
          please cancel the order.
        </p>
      </div>
      <Link to='/usermenu'>
        <button className="cancelOrderBtn"> Cancel </button>
      </Link>
    </div>
  );
}

export default PageTimer;
