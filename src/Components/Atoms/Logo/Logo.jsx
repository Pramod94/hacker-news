import React from "react";
import constant from "../../../data.json";
import logoImg from "../../../assets/y18.gif";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.border}>
        <img src={logoImg} alt="logo" width="20px" />
      </div>
      <h4 className={styles.title}>{constant.title}</h4>
    </div>
  );
};

export default Logo;
