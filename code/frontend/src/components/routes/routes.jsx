import { Route, Switch, withRouter } from "react-router-dom";
import * as ROUTES from "./const";
import LandingPage from "../pages/landing/landing";

import React, { Suspense } from "react";

export default ({ location }) => {
  console.log(location);
  return (
    <Switch location={location}>
      <Route
        path={ROUTES.LANDING}
        exact
        component={LandingPage}
        key="landing"
      />
      {/* <Route
      path={`${ROUTES.ITEM}/:id`}
      component={LazyProductPage}
      key="product"
    />
    <PrivateRoute
      path={ROUTES.CART}
      component={LazyCartPage}
      key="cart"
    />
    <PrivateRoute
      path={ROUTES.WISHLIST}
      component={LazyWishlistPage}
      key="wishlist"
    /> */}
      {/* <Route component={LazyNotFoundPage} key="404" /> */}
    </Switch>
  );
};
