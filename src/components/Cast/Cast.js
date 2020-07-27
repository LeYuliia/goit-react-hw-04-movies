import React, { Component } from "react";
import api from "../helpers/api";
import defaultImg from "./actor.png";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    api.getCast(movieId).then((result) =>
      this.setState({
        actors: result,
      })
    );
  }
  render() {
    const { actors } = this.state;
    const baseImgUrl = "https://image.tmdb.org/t/p/w200";
    return (
      <ul className={styles.list}>
        {actors.map(({ cast_id, profile_path, character, name }) => (
          <li key={cast_id} className={styles.list_item}>
            <img
              src={profile_path ? baseImgUrl + profile_path : defaultImg}
              alt="Actor"
              width={200}
            ></img>
            <div>
              {character && <p>Character: {character}</p>}
              <p>Name: {name}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
