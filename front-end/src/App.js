import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import LogoSection from './components/LogoSection/LogoSection';
import MainCarousel from './components/Carousel/MainCarousel';
import AboutSection from './components/AboutSection/AboutSection';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/checkout-page/Checkout';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/register-page/Register';
import Signin from './components/Sign-in/Signin';
import MenuPage from './components/menu-page/menu-page';
import UserMenu from './components/UserMenu/UserMenu';
import PageTimer from './components/PageTimer/PageTimer'; 
import SavedDistributors from './components/SavedDistributors/SavedDistributors'; 

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/menu">
            <MenuPage/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>
          
        <Route path="/signin">
          <Signin/>
        </Route>

        <Route path="/usermenu">
          <UserMenu />
        </Route>
        
          <Route path="/saveddistributors"> 
            <SavedDistributors /> 
          </Route>

          <Route path="/pagetimer"> 
            <PageTimer /> 
          </Route>
          
          <Route path="/">
              <LandingPage/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;