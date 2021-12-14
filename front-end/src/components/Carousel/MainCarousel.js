import './MainCarousel.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/carousel_image_1.jpeg'
import img2 from '../../images/carousel_image_2.jpeg'
import img3 from '../../images/carousel_image_3.jpeg'


function MainCarousel(){
    return (
        <div>
        <div className = "CarouselHeading">
            <h3>Popular Deals</h3>
        </div>
        <Carousel className = "MainPageCarousel">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default MainCarousel;