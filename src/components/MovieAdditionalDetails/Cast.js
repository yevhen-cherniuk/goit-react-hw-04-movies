import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchCast } from "../../services/fetchMoviesApi";
import Loader from "react-loader-spinner";

class Cast extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    cast: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const cast = await fetchCast(this.props.match.params.movieId);

    this.setState({ cast: cast, isLoading: false });
  }

  render() {
    const { cast, isLoading } = this.state;

    if (isLoading) {
      return (
        <Loader
            Loader type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
        />
      );
    }

    return (
      <div>
        {cast.length > 0 ? (
          <ul className="Cast">
            {cast.map(({ name, cast_id, character, profile_path }) => (
              <li key={cast_id} className="Cast--item">
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img
                    src="https://www.proficinema.ru/assets/images/cnt/poster_no.png"
                    alt={name}
                  />
                )}

                <p className="title">{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>We don't have any information about cast for this movie.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Cast;