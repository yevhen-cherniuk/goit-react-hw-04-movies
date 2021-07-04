import { NavLink } from "react-router-dom";

const FilmList = ({ movies, history, query }) => {
  console.log("FilmList", query);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;