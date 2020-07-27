import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";
import styles from "./MovieDetails.module.css";

const AdditionalInfo = ({ match }) => {
  return (
    <>
      <ul className={styles.additional_info}>
        <li>
          <NavLink
            to={`${match.url}/cast`}
            activeClassName={styles.additional_info_active}
          >
            Cast{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            activeClassName={styles.additional_info_active}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch>
    </>
  );
};

export default AdditionalInfo;
