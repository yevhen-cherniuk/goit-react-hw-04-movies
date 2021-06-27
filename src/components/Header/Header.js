import React from "react";
//Components
import Navigation from "../Navigation/Navigation";
// import { Layout } from "antd";
//styles
import style from '../Header/Header.module.css';

const Header = () => (
  <div className={style.Header}>
    <Navigation />
  </div>
);
export default Header;