import './Footer.css';
import { Link } from 'react-router-dom'
import ButtonUI from '../button/button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 

function Footer(){
    return (
      <div className = "footer">
      <Row>
          <Col>
            <div>
            <Link to='/signin'>
              <ButtonUI radius = '30px' width= '130px'> Sign Up</ButtonUI>
            </Link>
            </div>
          </Col>
          <Col>
            <div>
            <Link to='/register'>
                <ButtonUI radius = '30px' width= '130px'> Register</ButtonUI>
            </Link>
            </div>
          </Col>
      </Row>
      </div>

    );
};

export default Footer;