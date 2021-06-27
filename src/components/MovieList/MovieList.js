import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes";
import MoviePreview from "../MoviePreview/MoviePreview";
import Notification from "../Notification/Notification";

const MovieList = ({ movies, location, error }) => {
  return error ? (
    <Notification />
  ) : (
    <ul className="MovieList">
      {movies.map((movie) => (
        <li key={movie.id} className="MovieList--item">
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview
              title={movie.title}
              poster={movie.poster_path}
              id={movie.id}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);