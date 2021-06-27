import React, { Component } from "react";

//Components
import MovieList from "../components/MovieList/MovieList";
//loader
import Loader from "react-loader-spinner";
//Fetch
import { fetchTrendingMovies } from "../services/fetchMoviesApi";
//Style
// import "./HomePage.scss";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const trendingMovies = await fetchTrendingMovies();

    this.setState({ movies: trendingMovies, isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h2 className="HomePage--title">Trending today</h2>
        {isLoading ? (
          <Loader
            Loader type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
          />
        ) : (
          <MovieList movies={movies} /*from={this.props.location}*/ />
        )}
      </>
    );
  }
}

export default HomePage;