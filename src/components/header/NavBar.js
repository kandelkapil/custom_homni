import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="top-nav">
        <ul className="nav-bar-left">
          <li className="nav-links">
            <Link className="nav-items-left" to="/home">
              <i className="fas fa-school lg"></i>
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-items-left" to="/home">
              Homni LLC
            </Link>
          </li>
        </ul>

        <ul className="nav-bar-middle">
          <li className="nav-links">
            <Link className="nav-items-mid" to="/home">
              SHOP
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-items-mid" to="/home">
              LEARN
            </Link>
          </li>

          <li className="nav-links">
            <Link className="nav-items-mid" to="/home">
              PRACTICE
            </Link>
          </li>
        </ul>

        <ul className="nav-bar-right">
          <li className="nav-links">
            <Link className="nav-items-right" to="/home">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-items-right" to="/home">
              <i className="far fa-user"></i>
            </Link>
          </li>

          <li className="nav-links">
            <Link className="nav-items-right" to="/home">
              <i className="fas fa-search"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
