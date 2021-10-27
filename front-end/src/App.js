import {BrowserRouter, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import LogoSection from './components/LogoSection/LogoSection';
import MainCarousel from './components/Carousel/MainCarousel';
import AboutSection from './components/AboutSection/AboutSection';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/checkout-page/Checkout';
import Register from './components/register-page/Register';

function App() {
  return (
      <BrowserRouter>
        <Switch>

          <Route path="/checkout">
            <Checkout/>
          </Route>

        <Route path="/register">
          <Register/>
        </Route>
          
          <Route path="/">
              <LogoSection/>
              <MainCarousel/>
              <AboutSection/>
              <Partners/>
              <Footer/>
          </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
