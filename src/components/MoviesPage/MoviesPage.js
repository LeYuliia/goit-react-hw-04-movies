import React, { Component } from "react";
import queryString from "query-string";
import api from "../helpers/api.js";
import MoviesList from "../MoviesList/MoviesList.js";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    search: "",
    submit: false,
  };

  getQueryParams(qs) {
    return queryString.parse(qs);
  }

  componentDidMount() {
    const { query } = this.getQueryParams(this.props.location.search);
    if (query) {
      this.setState({ search: query }, () => {
        this.fetchMovies(query);
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = this.getQueryParams(prevProps.location.search);
    const { query: nextQuery } = this.getQueryParams(
      this.props.location.search
    );
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  onChange = (e) => {
    this.setState({
      search: e.currentTarget.value,
      submit: false,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `query=${this.state.search}`,
    });
    this.setState({
      search: "",
      submit:true,
    });
  };

  fetchMovies(query) {
    api
      .searchMovie(query)
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { movies, submit } = this.state;
    return (
      <>
        <form onSubmit={this.formSubmit} className={styles.form}>
          <input
            type="text"
            onChange={this.onChange}
            className={styles.texterea}
          />
          <button type="submit">Search</button>
        </form>
        {movies && <MoviesList movies={movies} />}

        {movies.length === 0 && submit &&(
          <h1>
            We couldn't find a movie :(<br></br> Try again!
          </h1>
        )}
      </>
    );
  }
}

export default MoviesPage;
