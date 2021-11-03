import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './menu-card.css'
import Counter from '../counter/counter'


const MenuCard = (props) => {
    const counterUpdater = (val) =>{
        if (props.menuCountUpdater){
            props.menuCountUpdater(val);
        }
    };


    return ( 
        <div>
            <div className='card'>
            <Container>
                <Row className='card-row'> 
                    <Col>
                        <img className  = 'round-img' src = {props.img} ></img>
                    </Col>
                    <Col>
                        <h5 className="cardtitle">{props.name}</h5>
                        <p className="cardprice"><strong>$</strong>{props.price}</p>           
                    </Col>
                    <Col>
                        <Counter counterUpdate={counterUpdater}/>
                    </Col>
                </Row>
                
            </Container> 
            </div>
            
            
            
        </div>
        
         
        


     );
}
 
export default MenuCard;