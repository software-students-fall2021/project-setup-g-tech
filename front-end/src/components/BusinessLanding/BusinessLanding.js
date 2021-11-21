import Footer from '../Footer/Footer';

const Business = () => {
    return (
        <div>
            <div className="LogoBlock">
                <div className = "LogoHeading">
                    <h1>Saverie</h1>
                </div>
                <div className = "CatchPhrase">
                    <h2>For Business</h2>
                </div>
                
            </div>
            <Footer signin='/business-signin' register='/business-register'/>
        </div>


    );
};

export default Business;