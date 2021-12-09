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
      `${process.env.REACT_APP_URL}/updateitem`,
      reqAdd,
      header
    );
  };

  const handleClose = async () => {
    setShow(false);
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/updateitem`,
      reqDel,
      header
    );
  };

  const handleRestID = async () => {
    localStorage.setItem("rest_id", props.details._id);
  };

  let img_src = ''
  try{
    img_src = (require("../../uploads/" + props.img).default)
    }
    catch(err){
      img_src = (require("../../images/not_found.jpeg").default);
    }

  const inSaved = props.saved.includes(props.details._id)

  return (
    <div>
      <hr />
      <div className="item">
        <Link className="link" to={"/menu"} onClick={handleRestID}>
          <div className="info">
            <img className="logo rounded" src={img_src} />
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
            style={{ width: "1.3em", height: "auto", color: "#dc3545"}}
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
