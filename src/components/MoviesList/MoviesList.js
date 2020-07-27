import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import defaultImg from "./moviePoster.png";
import styles from "./MoviesList.module.css";

const MovieList = ({ movies, location }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <ul className={styles.list}>
      {movies.map(({ id, name, title, poster_path }) => (
        <li key={id} className={styles.list_item}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
            className={styles.link}
          >
            <img
              src={poster_path ? baseImgUrl + poster_path : defaultImg}
              alt="poster"
              className={styles.poster}
            />
            <p className={styles.movie_name}>{name ? name : title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
