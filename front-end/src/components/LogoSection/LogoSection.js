import './LogoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery"
function LogoSection(){
    $(document).on('scroll', function(){
        if(window.scrollY < 200){
            $(".LogoHeading h1").css("padding-top", 250 - window.scrollY + "px")
        }
        if(window.scrollY > 100){
            $(".scrollArrow").css("display", "none")
        }
        else{
            $(".scrollArrow").css("display", "block")
        }
    })

    return (
        <div>
            <div className="LogoBlock">
                <div className = "LogoHeading">
                    <h1>Saverie</h1>
                </div>
                <div className = "CatchPhrase">
                    <h2>Eat more, Waste less</h2>
                </div>
                <div className = "scrollArrow">
                <FontAwesomeIcon icon={faChevronUp}  className = "UpArrow fa-blink"/>
                </div>
                
            </div>
            <div className = "LogoPlaceHolder">

            </div>
        </div>


    );
};

export default LogoSection;