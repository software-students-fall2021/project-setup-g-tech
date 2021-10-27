import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import "./PageTimer.css";

function PageTimer() {
  return (
    <div className="pageTimerContainer">
      <div className="timerHeading">
        <a className="goBack" href="localhost:3000/usermenu">
          &lt;
        </a>
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

      <button className="cancelOrderBtn"> Cancel </button>
    </div>
  );
}

export default PageTimer;
