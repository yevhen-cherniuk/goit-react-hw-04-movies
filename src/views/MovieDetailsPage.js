import { Component } from "react";
import { Link, Route } from "react-router-dom";
import { getFilmById } from "../services/fetchApi";
import Cast from "../components/MovieAdditionalDetails/Cast";
import Reviews from "../components/MovieAdditionalDetails/Reviews";

class MovieDetailsPage extends Component {
  state = {
    film: {},
  };

  async componentDidMount() {
    if (this.props.location.state?.id !== undefined) {
      const id = this.props.location.state.id;
      const response = await getFilmById(id);
      this.setState({ film: response.data });
    }
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location.state.from, {
      query: this.props.location.state.query,
    });
  };

  render() {
    const { film } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h1>{film.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.tagline} height='200px' width='300px'/>
        <p>{film.overview}</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: this.props.location.state,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: this.props.location.state,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Route exact path={`${this.props.match.path}/cast`} component={Cast} />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsPage;