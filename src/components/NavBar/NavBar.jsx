import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Nav, NavItem, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar(props) {
  return (
    <div className="nav-bar-top">
      <ul className="container">
        <li className="content-left">
          Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
        </li>
        <li className="content-right">
          <NavLink>Sign In / </NavLink>
          <NavLink>Register</NavLink>
        </li>
        <li className="content-right-money">
          USD <img src="../../../img/icons/Vector.svg"></img>
        </li>
      </ul>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
