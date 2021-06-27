import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from './Navigation.module.css'

const Navigation = () => {
  return (
       <ul className={style.listNav}>
      <li className={style.ItemNav}>
        <NavLink
          exact
          to={routes.home}
          className={style.NavLink}
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={style.NavLink}
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;