import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import "./Item.css";
// import { locals } from '../../../../back-end/app';

const Item = (props) => {
  const jwtToken = localStorage.getItem("token");
  const [show, setShow] = useState(false);

    const reqAdd = { action: 'add', rest_id: props.details._id }
    const reqDel = { action: 'del', rest_id: props.details._id }
    const header =  { headers: { Authorization: `JWT ${jwtToken}` } }

  const handleShow = async () => {
    setShow(true);
    const res = await axios.post(
      "http://localhost:3001/updateitem",
      reqAdd,
      header
    );
  };

  const handleClose = async () => {
    setShow(false);
    const res = await axios.post(
      "http://localhost:3001/updateitem",
      reqDel,
      header
    );
  };

  const handleRestID = async () => {
    localStorage.setItem("rest_id", props.details._id);
  };

  const inSaved = props.saved.includes(props.details._id)

  return (
    <div>
      <hr />
      <div className="item">
        <Link className="link" to={"/menu"} onClick={handleRestID}>
          <div className="info">
            <img className="logo rounded" src={props.img} />
            <div className="container">
              <p className="title">{props.details.name}</p>
              <p style={{ fontSize: "13px" }} className="desc">
                {props.details.location}
              </p>
            </div>
          </div>
        </Link>
        {show || inSaved ? (
          <FontAwesomeIcon
            className="heart"
            style={{ width: "1.3em", height: "auto" }}
            icon={faHeart}
            onClick={handleClose}
          />
        ) : (
          <FontAwesomeIcon
            className="heart"
            style={{ width: "1.3em", height: "auto" }}
            icon={farHeart}
            onClick={handleShow}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
