import { getTrendingFilms } from "../services/fetchApi";
import FilmList from "../components/MovieList/MovieList";
import { Component } from "react";
import Loader from "react-loader-spinner";


class Home extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await getTrendingFilms();
    this.setState({ movies: response.data.results,isLoading: false });
  }

  render() {
    const { movies,isLoading } = this.state;
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
          <FilmList movies={movies} history={this.props.history} />
        )}
      </>
    );
  }
}
export default Home;