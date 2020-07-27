import React from "react";
import styles from "./MovieDetails.module.css";

const MovieCard = ({ onGoBack, title, poster, overview, genres }) => {
  return (
    <section className={styles.container}>
      <button type="button" onClick={onGoBack} className={styles.go_back}>
        Go back
      </button>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info_container}>
        <img src={poster} alt={title} className={styles.poster} />
        <div className={styles.text_container}>
          <h2>Overview:</h2>
          <p className={styles.overview}>{overview}</p>
          <h2>Genres:</h2>
          <ul className={styles.list}>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
