import './Footer.css';
import ButtonUI from '../button/button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
function Footer(){
    return (
      <div className = "footer">
      <Row>
          <Col>
            <div>
              <ButtonUI radius = '30px' width= '150px'> Sign Up</ButtonUI>
            </div>
          </Col>
          <Col>
            <div className>
                <ButtonUI radius = '30px' width= '150px'> Register</ButtonUI>
            </div>
          </Col>
      </Row>
      </div>

    );
};

export default Footer;