import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderHistoryItem.css";

const OrderHistoryItem = (props) => {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    window.location.replace("/");
  }

  // get request to get the restaurant image
  const [thisImg, setImg] = useState([]);
  const restaurantId = props.details.rest_id;
  const reqData = { rest_id: restaurantId };
  const header = { headers: { Authorization: `JWT ${jwtToken}` } };
  let img_src = "";

  const fetchImg = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/findrestaurantimg`,
      reqData,
      header
    );

    try {
      img_src = require("../../uploads/" + res.data.img).default;
    } catch (err) {
      img_src = require("../../images/not_found.jpeg").default;
    }
    setImg(img_src);
  };
  useEffect(fetchImg, []);

  // formate the date
  const dateString = JSON.stringify(props.details.date);
  let convertedDate = "";
  for (let i = 0; i < dateString.length; i++) {
    if (i >= 1 && i <= 10) {
      convertedDate += dateString.charAt(i);
    }

    if (i >= 12 && i <= 16) {
      convertedDate += dateString.charAt(i);
    }

    if (i == 10) {
      convertedDate += "   ";
    }

    if (i == 16) {
      convertedDate += "   ";
    }
  }

  return (
    <div>
      <hr />
      <div>
        <div className="order">
          <img className="logo rounded" src={thisImg} />
          <div className="container">
            <p className="title">{props.details.name}</p>
            <p style={{ fontSize: "13px" }} className="desc">
              Order Total: ${props.details.order_total}
            </p>
            <p style={{ fontSize: "13px" }} className="desc">
              {convertedDate} Status: {props.details.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
