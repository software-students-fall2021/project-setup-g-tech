import Pick from "../Pick/Pick";

const PicksList = (props) => {
  let picks = props.list
    .map((item) => (
      <Pick
        key={item.id}
        details={item}
        user={props.user}
        img="https://picsum.photos/200"
      />
    ))
    .slice(0, 8);
  return (
    <div className="d-flex flex=row flex-nowrap overflow-auto">{picks}</div>
  );
};

export default PicksList;
