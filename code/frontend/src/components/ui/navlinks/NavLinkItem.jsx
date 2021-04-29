import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkItem.module.css';

// const NavLinkItem = props => {
//   const { url, exact } = props;

//   return (
//     <div>
//       <NavLink
//         to={url}
//         exact={exact}
//         activeClassName={styles.NavLinkActive}
//         className={styles.NavLink}
//       >
//         {props.children}
//       </NavLink>
//     </div>
//   );
// };

// NavLinkItem.propTypes = {
//   url: PropTypes.string,
//   exact: PropTypes.bool,
// };

export default ({url,exact,children}) => {
  return(
    <div>
      <NavLink
        to={url}
        exact={exact}
        activeClassName={styles.NavLinkActive}
        className={styles.NavLink}
      >
        {children}
      </NavLink>
    </div> 
  );
};


