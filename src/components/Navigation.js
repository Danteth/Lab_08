import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-custom navbar-expand-md">
      <NavLink className="navbar-brand" to="/">
      <div className="headerContainer">
                <img src={logo} className="headerLogo" alt="logo"/>
                <h2>MyWoW</h2>
            </div>
          </NavLink>
        <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
        <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
        <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
        <NavLink className="nav-link" to="/contents">
                  Gallery
                </NavLink>
       
      </nav>
    </div>
  );
}

export default Navigation;