import React, { Component } from "react";
import api from "../helpers/api";
import MoviesList from "../MoviesList";

class Home extends Component {
  state = {
    tranding: [],
  };
  componentDidMount() {
    api.getTranding().then((result) => {
      this.setState({ tranding: result });
    });
  }

  render() {
    return <MoviesList movies={this.state.tranding} />;
  }
}

export default Home;
