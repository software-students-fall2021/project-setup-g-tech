import OrderHistoryItem from "../OrderHistoryItem/OrderHistoryItem";

const OrderHistoryList = (props) => {
  let pastOrders = props.list
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((order) => (
      <OrderHistoryItem
        key={order._id}
        details={order}
        img="https://picsum.photos/200"
      />
    ));
  return <div>{pastOrders}</div>;
};

export default OrderHistoryList;
