import React, { Fragment } from "react";
import VendorPage from "../VendorPage/Vendor";
import LandingPage from "../LandingPage/LandingPage";
import SellerPage from "../SellerPage/SellerPage";
import RetailerPage from "../RetailerPage/RetailerPage";
import { Route, Switch } from "react-router-dom";
import Signin from "../Signinsignup/Signin";
import CatalogPage from "../CatalogPage/CatalogPage";
import PageNotFound from "../PageNotFound/PageNotFound";
import SignUp from "../Signinsignup/SignUp";
import Men from "../Men/Men";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Vendor" component={VendorPage} />
        <Route path="/SellerPage" component={SellerPage} />
        <Route path="/Signin" component={Signin} />
        <Route path="/RetailerPage" component={RetailerPage} />
        <Route path="/CatalogPage" component={CatalogPage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Men" component={Men} />
        <Route path="/PageNotFound" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
