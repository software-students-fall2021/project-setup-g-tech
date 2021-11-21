import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import url from 'url'
import './Item.css'

const Item = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        // axios.post('http://localhost:3001/updateitem', {
        //     action: 'del',
        //     id: props.user,
        //     name: props.details.name
        // })
    }
    const handleShow = () => {
        setShow(true)
        axios.post('http://localhost:3001/updateitem', {
            action: 'add',
            id: props.user,
            name: props.details.name
        })
    }

    
    const menuPath = url.format({
        pathname:"/menu",
        query: { id: props.details._id}
    })

    // const checkUpdates = async () => {
    //     let result = props.saved.map(e => e.name)
    //     if(result.includes(props.details.name)){
    //         setShow(true)
    //     }
    //  }
    //  useEffect(checkUpdates, false);

    return (
        <div>
            <hr />
            <div className='item'>
                <Link className='link' to={menuPath}>

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