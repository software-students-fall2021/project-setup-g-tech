import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import userIcon from "../../images/user-icon.png";
import "./Avatar.css";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => {
    localStorage.removeItem('token')
    setShow(false)
  }

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
          <Link to={'/saveddistributors'}>
            <Button
              style={{ marginTop: "2em", marginBottom: "0.5em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Saved
            </Button>
          </Link>
          <Link to={'/orderhistorypage'}>
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
              onClick={handleLogOut}
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
