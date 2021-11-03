import ReactCardFlip from 'react-card-flip';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './menu-card.css'
// import './cardflip.css';
import Counter from '../counter/counter'
import { useState } from 'react'


const MenuCard = (props) => {
    let itName = props.name;
    const counterUpdater = (val) =>{
        if (props.menuCountUpdater){
            props.menuCountUpdater(val); //to update count of total selected items

            //to update item selected and its amount
            const item = {};
            item['name']=itName;
            item['qty']=val;
            props.selectionUpdater(item);
        }
    };

    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return ( 
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

            <div className='card'>
                <Container>
                    <Row className='card-row'> 
                        {/* <div onClick={handleClick}> */}
                            <Col onClick={handleClick}>
                                <img className  = 'round-img' src = {props.img} ></img>
                            </Col>
                            <Col onClick={handleClick}>
                                <h5 className="cardtitle">{props.name}</h5>
                                <p className="cardprice"><strong>$</strong>{props.price}</p> 
                                {/* <p>Tap to view description</p>           */}
                            </Col>
                        {/* </div> */}
                        <Col>
                            <Counter counterUpdate={counterUpdater}/>
                        </Col>
                    </Row>  
                </Container>
            </div>
            {/* <div className='card'> */}
                <Container>
                    {/* <Row className='card-row'>  */}
                        <div className="back" onClick={handleClick}>
                            {props.description}
                        </div>
                    {/* </Row>   */}
                </Container>
            {/* </div> */}
            </ReactCardFlip>
        </div>

     );
}
 
export default MenuCard;