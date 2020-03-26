import React from "react";
import "./Navbar.scss";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__brand">Currency Exchange</li>
        <hr />
        <li className="navbar__list_item"><NavLink to={'/home'}>Calculate currency</NavLink></li>
          <li className="navbar__list_item"><NavLink to={'/map'}>Exchange points on map</NavLink></li>
          <li className="navbar__list_item"><NavLink to={'/contacts'}>Contact us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
