import Item from "../Item/Item";
const ItemsList = (props) => {
  const items = props.list
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => (
      <Item
        saved={props.saved}
        details={item}
        img = {item.image}
      />
    ));
  return <div>{items}</div>;
};

export default ItemsList;
