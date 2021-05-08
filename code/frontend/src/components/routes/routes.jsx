import { Route, Switch, withRouter } from "react-router-dom";
import * as ROUTES from "./const";
import LandingPage from "../pages/landing/landing";
import Product from "../pages/product/product";
import Login from "../pages/login/login";
import React, { Suspense, useContext } from "react";
import { tokencontext } from "../context/token";

export default ({ location }) => {
  const token = useContext(tokencontext);

  console.log(token.token);
  if (token.token == null) {
    return <Login />;
  }
  return (
    <Switch location={location}>
      <Route
        path={ROUTES.LANDING}
        exact
        component={LandingPage}
        key="landing"
      />
      <Route path={`${ROUTES.ITEM}/:id`} component={Product} key="product" />

      {/* <PrivateRoute
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
