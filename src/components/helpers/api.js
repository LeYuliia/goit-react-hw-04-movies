import axios from "axios";

const key = "d9a11c6f8cf7e07076db4aea208dc670";
const baseUrl = "https://api.themoviedb.org/3";

const getTranding = () => {
  return axios
    .get(`${baseUrl}/trending/all/day?api_key=${key}`)
    .then((response) => response.data.results);
};

const searchMovie = (query) => {
  return axios
    .get(
      `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
};

const getMovieDetails = (movieId) => {
  return axios
    .get(`${baseUrl}/movie/${movieId}?api_key=${key}`)
    .then((response) => response.data);
};

const getReviews = (movieId) => {
  return axios
    .get(`${baseUrl}/movie/${movieId}/reviews?api_key=${key}`)
    .then((response) => response.data.results);
};

const getCast = (movieId) => {
  return axios
    .get(`${baseUrl}/movie/${movieId}/credits?api_key=${key}`)
    .then((response) => response.data.cast);
};

export default {
  getTranding,
  searchMovie,
  getMovieDetails,
  getReviews,
  getCast,
};
