import OrderHistoryItem from "../OrderHistoryItem/OrderHistoryItem";

const OrderHistoryList = (props) => {
  let pastOrders = props.list
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .map((order) => (
      <OrderHistoryItem
        key={order.orderId}
        details={order}
        img="https://picsum.photos/200"
      />
    ));
  return <div>{pastOrders}</div>;
};

export default OrderHistoryList;
