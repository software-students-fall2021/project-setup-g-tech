import ReactCardFlip from "react-card-flip";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./menu-card.css";
// import './cardflip.css';
import Counter from "../Counter/counter.js";
import { useState } from "react";

const MenuCard = (props) => {
  let itName = props.name;
  let itPrice = props.price;
  let qty_available = props.qty_available

  const counterUpdater = (val) => {
    if (props.menuCountUpdater) {
      //to update item selected and its amount
      const item = {};
      item["name"] = itName;
      item["qty_available"] = qty_available;
      item["qty"] = val;
      item["price"] = itPrice;
      props.menuCountUpdater(val, item); //to update count of total selected items

      props.selectionUpdater(item);
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="card">
          <Container>
            <Row className="card-row">
              <Col onClick={handleClick}>
                <img className="round-img" src={props.img}></img>
              </Col>
              <Col onClick={handleClick}>
                <h5 className="cardtitle">{props.name}</h5>
                <p className="cardprice">
                  <strong>$</strong>
                  {props.price}
                </p>
              </Col>
              <Col>
                <Counter
                  item={props.name}
                  counterUpdate={counterUpdater}
                  qty_available={props.qty_available}
                  qty={props.qty}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="back" onClick={handleClick}>
            {props.description}
          </div>
        </Container>
      </ReactCardFlip>
    </div>
  );
};

export default MenuCard;
