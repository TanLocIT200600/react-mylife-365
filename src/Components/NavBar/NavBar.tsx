import React from "react";
import "./navbar.scss";
import { logo, bell, coach, healthy, logout } from "../../assets/index";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-top">
        <div className="Navbar-logo">
          <img className="Navbar-logo-title" src={logo} alt="logo" />
        </div>
        <ul className="Navbar-title">
          <li>
            <NavLink
              className="Navbar-title-link"
              to="/"
              style={isActive =>
                isActive
                  ? {
                    color: "#145930",
                  }
                  : { color: "#9fb198" }
              }
            >
              <img className="Navbar-title-img" src={coach} alt="" /> Admins
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar-title-link"
              to="/notifications"
              style={({ isActive }) =>
                isActive
                  ? {
                    color: "#145930",
                  }
                  : { color: "#9fb198" }
              }
            >
              <img className="Navbar-title-img" src={bell} alt="" />{" "}
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Navbar-title-link"
              to="/liver"
              style={({ isActive }) =>
                isActive
                  ? {
                    color: "#145930",
                  }
                  : { color: "#9fb198" }
              }
            >
              <img className="Navbar-title-img" src={healthy} alt="" /> Liver
              Scan Results
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Navbar-footer">
        <NavLink to="/login" className="Navbar-footer-logout" onClick={() => {
          localStorage.clear();
        }}>
          <img src={logout} alt="" /> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
