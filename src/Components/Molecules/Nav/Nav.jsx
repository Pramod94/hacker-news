import React from "react";
import Logo from "../../Atoms/Logo/Logo";
import Navigation from "../../Atoms/Navigation/Navigation";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Nav;
