import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import './Item.css'


const Item = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <hr />
            <div className='item'>
                <Link className='link' to='/menu'>
                    <div className='info'>
                        <img className='logo rounded' src={props.img} />
                        <div className='container'>
                            <p className='title'>{props.details.name}</p>
                            <p style={{fontSize: '13px'}} className='desc'>{props.details.location}</p>
                        </div>

                    </div>
                </Link>
                {show ? (
                    <FontAwesomeIcon className='heart' style={{width: '1.3em', height: 'auto'}} icon={faHeart} onClick={handleClose} />
                ) : (
                    <FontAwesomeIcon className='heart' style={{width: '1.3em', height: 'auto'}} icon={farHeart} onClick={handleShow} />
                )}
            </div>
        </div>
    );
}
    
export default Item;