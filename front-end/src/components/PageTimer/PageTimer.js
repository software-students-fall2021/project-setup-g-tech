import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import "./PageTimer.css";

function PageTimer() {
  return (
    <div className="pageTimerContainer">
      <div className="timerHeading">
        {/* ?? how to go back */}
        <p className="goBack" href="./PageTimer">
          &lt;
        </p>
        {/* make a global.css 
                    ?? */}
        <h1 className="timerTitle"> Order Confirmed </h1>
      </div>

      <div className="timerContent">
        <p className="successMsg">
          You order has been successfully placed! Please collect it at your
          earliest convenience.
        </p>

        <Timer pickUpTime="10" />
        {/* ?? where to go after time is up */}

        <p className="msgAboutCancel">
          If you are unable to collect your order within the given time, it will
          automatically be cancelled. If you know you are unable to collect it,
          please cancel the order.
        </p>
      </div>
      {/* ?? Which page should the used be directed to when they cancel the order */}
      <button className="cancelOrderBtn"> Cancel </button>
    </div>
  );
}

export default PageTimer;
