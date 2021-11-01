import './AboutSection.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bulb from "./bulb.png";
import mission from "./mission.png";


function AboutSection(){
    return (
        <div className = "AboutBlock">
            <div className = "AboutMainHeading">
                <h3>Learn About Us</h3>
            </div>

            <div className = "AboutRows">
            <Row className = "HeaderRow">
                <Col xs ={1}>
                    <img className = "AboutImage" src={bulb}></img>
                </Col>

                <Col>
                    <div className = "AboutHeading">
                        <h4>Our Inspiration</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ offset: 1 }}>
                    <div className = "AboutContent">
                        <h5>As students, we wished there was a platform that provides accessibility to the general population with an opportunity to receive and consume food that would otherwise go to waste. </h5>
                    </div>
                </Col>
            </Row>

            <Row className = "HeaderRow">
                <Col xs = {1}>
                    <img className = "AboutImage" src={mission}></img>
                </Col>

                <Col>
                    <div className = "AboutHeading">
                        <h4>Our Mission</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ offset: 1 }}>
                    <div className = "AboutContent">
                        <h5>As students, we wished there was a platform that provides accessibility to the general population with an opportunity to receive and consume food that would otherwise go to waste. </h5>
                    </div>
                </Col>
            </Row>

            <Row className = "HeaderRow">
                <Col xs = {1}>
                    <img className = "AboutImage" src={bulb}></img>
                </Col>

                <Col>
                    <div className = "AboutHeading">
                        <h4>Our Goal</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ offset: 1 }}>
                    <div className = "AboutContent">
                        <h5>As students, we wished there was a platform that provides accessibility to the general population with an opportunity to receive and consume food that would otherwise go to waste. </h5>
                    </div>
                </Col>
            </Row>

            </div>


        </div>

    );
};

export default AboutSection;