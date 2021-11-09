import "./OrderHistoryItem.css";

const OrderHistoryItem = (props) => {
  return (
    <div>
      <hr />
      {/* It is linked to /usermenu for now. But it should be linked to a new page 
            called order detail, and will be modified when order detial page is finished.*/}
      <div className="link">
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
      </div>
    </div>
  );
};

export default OrderHistoryItem;
