import React from "react";

import Header from "./header/Header";
import Copyright from "../copyright/Copyright";
// import FooterWithCopyright from '../../compositions/FooterWithCopyright/FooterWithCopyright';

const Layout = (props) => {
  return (
    <div>
      <Header cartCount={props.cartCount} />
      <main>{props.children}</main>
      <Copyright />
    </div>
  );
};

export default Layout;
