import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchSearch } from "../services/fetchMoviesApi";
import MovieList from "../components/MovieList/MovieList";
import Loader from "react-loader-spinner";

export class MoviesPage extends Component {
  state = {
    query: "",
    searchedMovies: [],
    isLoading: false,
    error: false,
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);

    if (searchParams.get("query")) {
      const searchedMovies = await fetchSearch(searchParams.get("query"));

      this.setState({ searchedMovies });
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("query", this.state.query);

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: params.toString(),
    });

    this.setState({ isLoading: true });
    const searchedMovies = await fetchSearch(this.state.query);

    if (searchedMovies.length === 0) {
      return this.setState({ error: true, isLoading: false, query: "" });
    }

    return this.setState({ searchedMovies, isLoading: false, error: false });
  };

  render() {
    const { searchedMovies, isLoading, error } = this.state;

    return (
      <>
        <form className="MoviesSearch" onSubmit={this.handleSubmit}>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="MoviesSearch-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Please enter your query"
          />
          <button type="submit" className="MoviesSearch-button">
            <span className="MoviesSearch-button-label">Search</span>
          </button>
        </form>
        <div>
          {isLoading ? (
           <Loader
            Loader type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
          />
          ) : (
            <MovieList {...this.props} movies={searchedMovies} error={error} />
          )}
        </div>
      </>
    );
  }
}

export default MoviesPage;