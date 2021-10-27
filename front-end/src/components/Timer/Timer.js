import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  {
    /* pick up time needs to be passed in from the checkout page */
  }

  const [[mins, secs], setTime] = useState([props.pickUpTime, 0]);

  const tick = () => {
    if (mins === 0 && secs === 0) reset();
    else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(mins), parseInt(secs)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timer">
      <p>{`${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
}

export default Timer;
