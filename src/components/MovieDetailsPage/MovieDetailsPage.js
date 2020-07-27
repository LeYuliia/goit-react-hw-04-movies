import React, { Component } from "react";
import api from "../helpers/api";
import MovieCard from "./MovieCard";
import AdditionalInfo from "./AdditionalMovieInfo";
import defaultImg from "./moviePoster.png";
import routes from "../../routes";

class MovieDetails extends Component {
  state = {
    title: "",
    poster: "",
    overview: "",
    genres: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    api.getMovieDetails(movieId).then((result) => {
      const { title, poster_path, overview, genres } = result;
      const baseImgUrl = "https://image.tmdb.org/t/p/w500";
      this.setState({
        title: title,
        poster: poster_path ? baseImgUrl + poster_path : defaultImg,
        overview: overview,
        genres: genres,
      });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };
  render() {
    const { title, poster, overview, genres } = this.state;
    return (
      <>
        <MovieCard
          onGoBack={this.handleGoBack}
          title={title}
          poster={poster}
          overview={overview}
          genres={genres}
        />
        <AdditionalInfo match={this.props.match} />
      </>
    );
  }
}

export default MovieDetails;
