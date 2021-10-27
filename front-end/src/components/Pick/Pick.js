import { Card } from 'react-bootstrap'
import placeholder from '../../images/placeholder-160x160.jpg'
import './Pick.css'



const Pick = (props) => {
    return (
        <div className='container mt-3'>
            <Card className='card' style={{ width: '7em' }}>
                <Card.Img className='image rounded' variant="top" src={placeholder} />
                <p className='card-title mt-2'>Pick #{props.num}</p>
            </Card>
        </div>
    )
}

export default Pick