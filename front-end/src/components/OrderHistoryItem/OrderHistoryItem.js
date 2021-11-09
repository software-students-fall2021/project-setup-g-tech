import { Link } from "react-router-dom";
import "./OrderHistoryItem.css";

const OrderHistoryItem = (props) => {
  return (
    <div>
      <hr />
      {/* It is linked to /usermenu for now. But it should be linked to a new page 
            called order detail, and will be modified when order detial page is finished.*/}
      <Link className="link" to="/usermenu">
        <div className="order">
          <img className="logo rounded" src={props.img} />
          <div className="container">
            <p className="title">{props.details.orderRestaurant}</p>
            <p style={{ fontSize: "13px" }} className="desc">
              {props.details.orderTotal}
            </p>
            <p style={{ fontSize: "13px" }} className="desc">
              {props.details.orderDate}: {props.details.orderStatus}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OrderHistoryItem;
