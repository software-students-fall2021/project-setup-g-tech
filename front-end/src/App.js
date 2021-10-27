import {BrowserRouter, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
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

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
