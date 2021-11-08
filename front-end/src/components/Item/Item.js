import { Link } from 'react-router-dom'
import './Item.css'


const Item = (props) => {
    return (
        <div>
            <hr />
            <Link className='link' to='/menu'>
                <div className='item'>
                    <img className='logo rounded' src={props.img} />
                    <div className='container'>
                        <p className='title'>{props.details.name}</p>
                        <p style={{fontSize: '13px'}} className='desc'>{props.details.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
    
export default Item;