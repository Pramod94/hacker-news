import React from "react";
import Logo from "../Logo/Logo";
import data from "../../../data.json";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationWrapper}>
        {data.navigation.map((ele, index) => (
          <div>
            <Link to={ele.route}>{ele.title}</Link>
            {data.navigation.length === index + 1 ? "" : <span> |</span>}
          </div>
        ))}
      </div>
      <div>{data.login}</div>
    </div>
  );
};

export default Navigation;
