import React from "react";
import Navigation from "../Navigation/Navigation";
import style from '../Header/Header.module.css';

const Header = () => (
  <div className={style.Header}>
    <Navigation />
  </div>
);
export default Header;