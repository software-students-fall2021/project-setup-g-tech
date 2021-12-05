import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Pick.css";

const Pick = (props) => {
  const handleRestID = async () => {
    localStorage.setItem("rest_id", props.details._id);
    document.cookie = `rest_id=${props.details._id}`;
  };

  return (
    <Link className="link" to={"/menu"} onClick={handleRestID}>
      <div className="mt-3 pick-card">
        <Card className="card" style={{ width: "7em" }}>
          <Card.Img className="image rounded img-size" variant="top" src={props.img} />
          <p className="card-title mt-2">{props.details.name}</p>
        </Card>
      </div>
    </Link>
  );
};

export default Pick;
