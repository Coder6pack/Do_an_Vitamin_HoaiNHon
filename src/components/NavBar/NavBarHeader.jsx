import React from "react";
import "./NavBarHeader.scss";
import { NavLink } from "react-bootstrap";

export default function NavBarHeader() {
  return (
    <div className="container-header">
      <div className="logo-shop container-header-item">
        <img src="../../../public/img/icons/logo.jpg"></img>
      </div>
      <div className="container-header-menu container-header-item-center">
        <ul className="container-header-menu-list">
          <li>
            <NavLink>HOME</NavLink>
          </li>
          <li>
            <NavLink>SHOP</NavLink>
          </li>
          <li>
            <NavLink>FAQ'S</NavLink>
          </li>
          <li>
            <NavLink>STOCKISTS</NavLink>
          </li>
          <li>
            <NavLink>WHOLESALE</NavLink>
          </li>
          <li>
            <NavLink>CONTACT</NavLink>
          </li>
        </ul>
      </div>

      <div className="icons container-header-item">
        <NavLink>
          <img src="../../../public/img/icons/search.svg" />
        </NavLink>
        <NavLink>
          <img src="../../../public/img/icons/bag.svg" />
        </NavLink>
      </div>
    </div>
  );
}
