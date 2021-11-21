import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import userIcon from "../../images/user-icon.png";
import Logout from "../Logout/Logout";
import url from 'url'
import "./Avatar.css";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const favoritesPath = url.format({
    pathname:"/saveddistributors",
    query: { id: props.user}
  })

  const orderHistoryPath = url.format({
    pathname:"/orderhistorypage",
    query: { id: props.user}
  })

  return (
    <div>
      <img
        src={userIcon}
        alt="User Icon"
        className="user border rounded-circle mt-3"
        onClick={handleShow}
      />

      <Modal dialogClassName="avatar-modal" show={show} onHide={handleClose}>
        <Modal.Footer
          className="avatar-footer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to={favoritesPath}>
            <Button
              style={{ marginTop: "2em", marginBottom: "0.5em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Restaurants
            </Button>
          </Link>
          <Link to={orderHistoryPath}>
            <Button
              style={{ marginBottom: "0.5em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Order History
            </Button>
          </Link>
          <Link to="/">
            <Button
              style={{ marginBottom: "3em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Log Out
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Avatar;
