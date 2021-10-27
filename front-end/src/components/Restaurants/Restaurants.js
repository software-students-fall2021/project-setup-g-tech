import React, { useState, useEffect } from "react";
import "./Restaurants.css";

function Restaurants(props) {
  return (
    <div className="resContainer">
      <article className="restaurant">
        <img src={props.img} />
        <h2> {props.details.restaurant_name} </h2>
      </article>
      <hr />
    </div>
  );
}

export default Restaurants;
