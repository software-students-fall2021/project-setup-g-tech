import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Pick.css'


const Pick = (props) => {
    return (
        <Link className='link' to='/menu'>
            <div className='container mt-3'>
                <Card className='card' style={{ width: '7em' }}>
                    <Card.Img className='image rounded' variant="top" src={props.img} />
                    <p className='card-title mt-2'>{props.details.name}</p>
                </Card>
            </div>
        </Link>
    )
}

export default Pick