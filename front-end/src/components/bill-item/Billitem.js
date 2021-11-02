import './Billitem.css';

const Billitem = (props) => {
    let pretotal = parseFloat(props.price);
    // console.log(pretotal);
    // pretotal = toString(pretotal);
    return (
        <>
            <div className='row justify-content-center table-row'>
                <div className='my-col-4'>
                    <p className='table-item quantity'>{props.quantity}x</p>
                </div>
                <div className='my-col-2'>
                    <p className='table-item item-name'>{props.itemName}</p>
                </div>
                <div className='my-col-4'>
                    <p className='table-item price'>${props.price}</p>
                </div>
            </div>
            {/* <div className='pretotal'>
                <p>{toString(pretotal)}</p>
            </div> */}
        </>
    );
}

export default Billitem;