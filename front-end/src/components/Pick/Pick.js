import { Card } from 'react-bootstrap'
import './Pick.css'



const Pick = (props) => {
    return (
        <div className='container mt-3'>
            <Card className='card' style={{ width: '7em' }}>
                <Card.Img className='image rounded' variant="top" src={props.img} />
                <p className='card-title mt-2'>{props.details.restaurant_name}</p>
            </Card>
        </div>
    )
}

export default Pick