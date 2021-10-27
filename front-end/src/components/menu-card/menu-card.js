import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './menu-card.css'
import Counter from '../counter/counter'


const MenuCard = (props) => {
    return ( 
        <div className='card'>
            <Container>
                <Row className='card-row'> 
                    <Col>
                        <img className  = 'round-img' src = {props.img} ></img>
                    </Col>
                    <Col>
                        <h5 className="cardtitle">{props.title}</h5>
                        <p className="cardprice">{props.price}</p>           
                    </Col>
                    <Col>
                        <Counter/>
                                  
                    </Col>
                </Row>
            </Container>   
        </div>
        


     );
}
 
export default MenuCard;