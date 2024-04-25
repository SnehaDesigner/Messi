import React, { useContext } from "react";
import logoImg from "../../assets/logo.png";
import { ListItem } from "@mui/material";
import "./Header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink } from "react-router-dom";
import FavContext from "../../store/FavContext";

const Header = () => {
  const favCtx = useContext(FavContext);
  const favCount = favCtx.favItems.length;
  console.log(favCount);
  return (
    <header>
      <nav className="container">
        <div className="navComponents">
          <div className="navbarBrand">
            <a href="/">
              <img src={logoImg} alt="Messi Logo" />
            </a>
          </div>
          <div className="navbarList">
            <ul>
              <ListItem>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Shop
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/kl"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="/favourites"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FavoriteBorderIcon />
                  <span className="favCount d-flex align-items-center justify-content-center">
                    {favCount ? favCount : "0"}
                  </span>
                </NavLink>
              </ListItem>
              <ListItem>
                <ShoppingBagOutlinedIcon />
              </ListItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
