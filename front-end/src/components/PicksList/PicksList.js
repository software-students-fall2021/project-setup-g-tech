import Pick from "../Pick/Pick";

const PicksList = (props) => {
  let picks = props.list
    .map((item) => (
      <Pick
        key={item.id}
        details={item}
        user={props.user}
        img = {item.image}
        // img="https://picsum.photos/200"
        // img = {require("../../uploads/" + item.image).default}
      />
    ))
    .slice(0, 8);
  return (
    <div className="d-flex flex=row flex-nowrap overflow-auto">{picks}</div>
  );
};

export default PicksList;
