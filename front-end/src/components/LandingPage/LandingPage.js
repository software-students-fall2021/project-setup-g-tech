import LogoSection from '../LogoSection/LogoSection';
import MainCarousel from '../Carousel/MainCarousel';
import AboutSection from '../AboutSection/AboutSection';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer'
import $ from "jquery"


import './LandingPage.css';

function LandingPage(){
      $(document).on('scroll', function(){
        if(window.scrollY >=600){
            $(".ContentSection").css("overflow-y", "scroll")
        }
        else{
          $(".ContentSection").css("overflow-y", "hidden")
        }
    })
    return (
      <div className = "LandingPage">
        <LogoSection/>
        <div className = "ContentSection">
          <AboutSection/>
          <MainCarousel/>
          <Partners/>
        </div>

        <Footer signin='/signin' register='/register'/>
      </div>
    );
};

export default LandingPage;