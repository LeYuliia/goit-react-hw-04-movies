import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import routes from "./routes";

const Home = lazy(() =>
  import("./components/HomePage" /* webpackChunkName: "home-component" */)
);

const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage" /* webpackChunkName: " MoviesPage-component" */
  )
);

const MovieDetails = lazy(() =>
  import(
    "./components/MovieDetailsPage" /* webpackChunkName: "MovieDetails-component" */
  )
);


const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetails} />
        <Route component={Home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
