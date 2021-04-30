import React from "react";

// import Logo from "../UI/Logo/Logo";
import styles from "./Copyright.module.css";
// import LinkItem from '../UI/LinkItem/LinkItem';
import NavLinkItem from "../ui/navlinks/NavLinkItem";
import { getClassName } from "../ResponsiveWrapper/ResponsiveWrapper";

/**
 * TODO
 * Add social network icons
 */

const Copyright = () => {
  return (
    <div className={styles.Copyright}>
      <div className={styles.Container}>
        <div className={styles.InnerContainer}>
          &copy; 2018
          {/* <div className={styles.Logo}><Logo height="15px" /></div> */}
          Store All rights reserved.
        </div>
        <div className={[styles.InnerContainer, styles.Links].join(" ")}>
          <NavLinkItem url="/" alt="Privacy Policy" exact={false}>
            Privacy Policy
          </NavLinkItem>
          <NavLinkItem url="/" alt="Terms of Use" exact={false}>
            Terms of Use
          </NavLinkItem>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
