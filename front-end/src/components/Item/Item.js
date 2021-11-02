import './Item.css'


const Item = (props) => {
    return (
        <div>
            <hr />
            <div className='item'>
                <img className='logo rounded' src={props.img} />
                <div className='container'>
                    <p className='title'>{props.details.name}</p>
                    <p style={{fontSize: '13px'}} className='desc'>{props.details.location}</p>
                </div>
            </div>
        </div>
    );
}
    
export default Item;