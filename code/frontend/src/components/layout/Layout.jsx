import React from 'react';

import Header from './header/Header';
// import FooterWithCopyright from '../../compositions/FooterWithCopyright/FooterWithCopyright';

const Layout = props => {
  return (
    <div>
      <Header cartCount={props.cartCount} />
      <main>{props.children}</main>
      {/* <FooterWithCopyright /> */}
    </div>
  );
};

export default Layout;
