import './Item.css'


const Item = (props) => {
    return (
        <div>
            <hr />
            <div className='item'>
                <img className='logo rounded' src={props.img} />
                <div className='container'>
                    <p className='title'>{props.details.restaurant_name}</p>
                    <p style={{fontSize: '13px'}} className='desc'>{props.details.restaurant_location}</p>
                </div>
            </div>
        </div>
    );
}
    
export default Item;