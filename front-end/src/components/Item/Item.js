import './Item.css'


const Item = (props) => {
    return (
        <div>
            <hr />
            <div className='item'>
                <div className='logo rounded'></div>
                <div className='container'>
                    <p className='title'>Distributor #{props.num}</p>
                    <p className='desc'>Lorem ipsum dolor set amet</p>
                </div>
            </div>
        </div>
    );
}
    
export default Item;
    