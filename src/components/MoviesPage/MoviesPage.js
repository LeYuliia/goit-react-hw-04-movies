import React, { Component } from "react";
import api from "../helpers/api.js";
import MoviesList from "../MoviesList/MoviesList.js";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    submit: false,
  };

  formChange = (e) => {
    this.props.history.push({
      search: e.currentTarget.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({ submit: true });
    this.fetchMovies();
  };
  fetchMovies = () => {
    api
      .searchMovie(this.props.location.search)
      .then((result) => this.setState({ movies: result }));
  };

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const { movies, submit } = this.state;
    return (
      <>
        <form onSubmit={this.formSubmit} className={styles.form}>
          <input
            type="text"
            onChange={this.formChange}
            className={styles.texterea}
          />
          <button type="submit">Search</button>
        </form>
        {movies && <MoviesList movies={movies} />}

        {movies.length === 0 && submit && (
          <h1>
            We couldn't find a movie :(<br></br> Try again!
          </h1>
        )}
      </>
    );
  }
}

export default MoviesPage;
