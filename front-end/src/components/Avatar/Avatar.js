import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
// import userIcon from "../../images/user-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "./Avatar.css";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => {
    localStorage.removeItem('token')
    setShow(false)
  }

  const jwtToken = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const fetchUser = async () => {
    const res = await axios.get("http://localhost:3001/getuser", {
      headers: { Authorization: `JWT ${jwtToken}` },
    });
    setData(res.data);
  };
  useEffect(fetchUser, []);

  return (
    <div>
      {/* <img
        src={userIcon}
        alt="User Icon"
        className="user border rounded-circle mt-3"
        onClick={handleShow}
      /> */}
      <FontAwesomeIcon icon={faUserCircle}  className='user border rounded-circle mt-3'  onClick={handleShow} size='3x' color='#21a376' />

      <Modal dialogClassName="avatar-modal" show={show} onHide={handleClose}>
        <Modal.Header className="avatar-header" style={{ display: "block" }}>
          <div style={{ display: "flex" }}>
            <h4>Account</h4>
            <Link to="/">
              <FontAwesomeIcon icon={faPowerOff} className="logout-button" onClick={handleShow} color='#21a376' />
            </Link>
          </div>
          <div style={{ display: "flex" }}>
          <FontAwesomeIcon icon={faUserCircle}  onClick={handleShow} className="user-avatar"  size='2x' color='#21a376' />
            <p  className="user-name">{data.firstName} {data.lastName}</p>
          </div>
        </Modal.Header>
        <Modal.Footer
          className="avatar-footer"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <Link to={'/saveddistributors'}>
            {/* <Button
              style={{ marginTop: "2em", marginBottom: "0.5em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Saved
            </Button> */}
            <p className="modal-item">Saved Distributors</p>
          </Link>
          <Link to={'/orderhistorypage'}>
            {/* <Button
              style={{ marginBottom: "0.5em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleClose}
            >
              Order History
            </Button> */}
            <p className="modal-item">Order History</p>
          </Link>
          {/* <Link to="/">
            <Button
              style={{ marginBottom: "3em" }}
              className="modal-item"
              variant="secondary"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </Link> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Avatar;
