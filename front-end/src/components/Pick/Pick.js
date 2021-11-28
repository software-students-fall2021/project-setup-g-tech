import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Pick.css";
import url from "url";

const Pick = (props) => {
  const menuPath = url.format({
    pathname: "/menu",
  });

  return (
    <Link className="link" to={menuPath}>
      <div className="container mt-3">
        <Card className="card" style={{ width: "7em" }}>
          <Card.Img className="image rounded" variant="top" src={props.img} />
          <p className="card-title mt-2">{props.details.name}</p>
        </Card>
      </div>
    </Link>
  );
};

export default Pick;
