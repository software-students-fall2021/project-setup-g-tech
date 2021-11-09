import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./components/CheckoutPage/Checkout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/register-page/Register";
import Signin from "./components/Sign-in/Signin";
import MenuPage from "./components/menu-page/menu-page";
import UserMenu from "./components/UserMenu/UserMenu";
import PageTimer from "./components/PageTimer/PageTimer";
import SavedDistributors from "./components/SavedDistributors/SavedDistributors";
import OrderHistoryPage from "./components/OrderHistoryPage/OrderHistoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/menu">
          <MenuPage />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/usermenu">
          <UserMenu />
        </Route>

        <Route path="/orderhistorypage">
          <OrderHistoryPage />
        </Route>

        <Route path="/saveddistributors">
          <SavedDistributors />
        </Route>

        <Route path="/pagetimer">
          <PageTimer />
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
