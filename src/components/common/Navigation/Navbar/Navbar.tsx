import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__brand">Currency Exchange</li>
        <hr />
        <li className="navbar__list_item">Calculate currency</li>
        <li className="navbar__list_item">Exchange points on map</li>
        <li className="navbar__list_item">Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
