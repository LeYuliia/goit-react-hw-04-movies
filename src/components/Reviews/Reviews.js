import React, { Component } from "react";
import api from "../helpers/api";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    api
      .getReviews(movieId)
      .then((result) => this.setState({ reviews: result }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.list_item}>
              <h2 className={styles.title}>{author}:</h2>
              <p className={styles.text}>{content}</p>
            </li>
          ))}
        </ul>
        {reviews.length === 0 && (
          <p className={styles.default}>This movie has no reviews yet.</p>
        )}
      </>
    );
  }
}
export default Reviews;
