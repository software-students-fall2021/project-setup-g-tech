import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import userIcon from '../../images/user-icon.png'
import './Avatar.css'


const Avatar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <img 
                src={userIcon} 
                alt='User Icon' 
                className='user border rounded-circle mt-3' 
                onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Footer>
                    <Link to='/saveddistributors'>
                        <Button variant="secondary" onClick={handleClose}>
                            Restaurants
                        </Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="secondary" onClick={handleClose}>
                            Log Out
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Avatar