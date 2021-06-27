import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Cast from "./components/MovieAdditionalDetails/Cast";
import Reviews from "./components/MovieAdditionalDetails/Reviews";
import Loader from "react-loader-spinner";
import routes from "./routes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Suspense fallback={
        <Loader
          Loader type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
        />
      }>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route
                  path={routes.movieDetails}
                  render={(props) => {
                    const { path } = props.match;
                    return (
                      <div component={<MovieDetailsPage {...props} />}>
                        <Route path={`${path}/cast`} component={Cast} />
                        <Route path={`${path}/reviews`} component={Reviews} />
                      </div>
                    );
                  }}
                />
            <Redirect to="/" />
          </Switch>
        </Suspense>
    </div>
  );
}

export default App;