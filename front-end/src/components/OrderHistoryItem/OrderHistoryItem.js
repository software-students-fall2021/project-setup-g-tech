import "./OrderHistoryItem.css";

const OrderHistoryItem = (props) => {
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
      {/* It is linked to /usermenu for now. But it should be linked to a new page 
            called order detail, and will be modified when order detial page is finished.*/}
      <div className="link">
        <div className="order">
          <img className="logo rounded" src={props.img} />
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
