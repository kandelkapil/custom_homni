import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import DeckIcon from "@mui/icons-material/Deck";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <div className="container-nav-bar">
      <div className="wrapper-nav-bar">
        <div className="nav-bar-left">
          <div className="nav-links">
            <Link className="nav-icon-home" to="/home">
              <DeckIcon sx={{ fontSize: "45px" }} />
            </Link>
          </div>
          <div className="nav-links">
            <Link className="nav-item-head" to="/home">
              Homni LLC
            </Link>
          </div>
        </div>

        <div className="nav-bar-middle">
          <div className="nav-shop">
            <Link className="nav-items-shop" to="/home">
              SHOP
            </Link>
          </div>
          <div className="nav-learn">
            <Link className="nav-items-learn" to="/home">
              LEARN
            </Link>
          </div>

          <div className="nav-practice">
            <Link className="nav-items-practice" to="/home">
              PRACTICE
            </Link>
          </div>
        </div>

        <div className="nav-bar-right">
          <div className="nav-links">
            <Link className="nav-icon-cart" to="/home">
              <ShoppingCartCheckoutIcon
                sx={{ fontSize: "28px", color: "black" }}
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link className="nav-icon-person" to="/home">
              <PersonOutlineIcon sx={{ fontSize: "28px", color: "black" }} />
            </Link>
          </div>

          <div className="nav-links">
            <Link className="nav-icon-search" to="/home">
              <SearchIcon sx={{ fontSize: "28px", color: "black" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
