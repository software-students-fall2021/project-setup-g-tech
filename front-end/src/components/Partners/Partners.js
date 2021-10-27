import './Partners.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Partners(){
    return (
        <div className = "PartnersBlock">
            <div className = "PartnersHeading">
                <h3>Our Partners</h3>
            </div>
            <Container className = 'imageBox'>
                <Row className = "imageRow">
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                </Row>
                <Row className = "imageRow2">
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                </Row>
                <Row className = "imageRow2">
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                    <Col><img src = 'https://picsum.photos/50/50'></img></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Partners;