import LogoSection from '../LogoSection/LogoSection';
import MainCarousel from '../Carousel/MainCarousel';
import AboutSection from '../AboutSection/AboutSection';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer'

import './LandingPage.css';

function LandingPage(){
    return (
      <div className = "LandingPage">
        <LogoSection/>
        <AboutSection/>
        <MainCarousel/>
        <Partners/>
        <Footer/>
      </div>
    );
};

export default LandingPage;