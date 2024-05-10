import React, { useContext } from "react";
import logoImg from "../../assets/logo.png";
import { ListItem } from "@mui/material";
import "./Header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, NavLink } from "react-router-dom";
import FavContext from "../../store/FavContext";
import AuthContext from "../../store/authContext";

const Header = () => {
  const favCtx = useContext(FavContext);
  const authCtx = useContext(AuthContext);
  const favCount = favCtx.favItems.length;
  const isAuthenticated = authCtx.isLogin;
  console.log(isAuthenticated);
  console.log(favCount);
  return (
    <header>
      <nav className="container">
        <div className="navComponents">
          <div className="navbarBrand">
            <Link to="/">
              <img src={logoImg} alt="Messi Logo" />
            </Link>
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
              {isAuthenticated ? (
                <>
                  <ListItem>
                    <NavLink
                      to="/favorites"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FavoriteBorderIcon />
                      <span className="favCount d-flex align-items-center justify-content-center">
                        {favCount ?? "0"}
                      </span>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <ShoppingBagOutlinedIcon />
                  </ListItem>
                </>
              ) : (
                <ListItem>
                  <button className="login">
                    <Link to="/login">Login</Link> /{" "}
                    <Link to="/register">Register</Link>
                  </button>
                </ListItem>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
