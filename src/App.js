import { Route, Switch, Redirect } from "react-router";
import Home from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
      </Switch>
      <Redirect to={{ pathname: "/" }} />
    </>
  );
}

export default App;