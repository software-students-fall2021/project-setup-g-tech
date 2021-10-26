import logo from './logo.svg';
import './App.css';
import LogoSection from './components/LogoSection/LogoSection';
import MainCarousel from './components/Carousel/MainCarousel';
import AboutSection from './components/AboutSection/AboutSection';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <LogoSection/>
      <MainCarousel/>
      <AboutSection/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
