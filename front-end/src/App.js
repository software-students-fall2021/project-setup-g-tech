import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Checkout from './components/checkout-page/Checkout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        
        <Route path="/">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;