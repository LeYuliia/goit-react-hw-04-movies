import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.active_link}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.active_link}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;
