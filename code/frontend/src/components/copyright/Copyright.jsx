import React from "react";

// import Logo from "../UI/Logo/Logo";
import styles from "./Copyright.module.css";
// import LinkItem from '../UI/LinkItem/LinkItem';
import NavLinkItem from "../ui/navlinks/NavLinkItem";
import { getClassName } from "../ResponsiveWrapper/ResponsiveWrapper";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className={getClassName}>
      <div className={styles.Container}>
        <div className={styles.InnerContainer}>
          &copy; 2018 Store All rights reserved.
        </div>
        <div className={[styles.InnerContainer, styles.Links].join(" ")}>
          <Link to="/pol" alt="Privacy Policy">
            Privacy Policy
          </Link>
          <Link to="/tou" alt="Terms of Use">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
