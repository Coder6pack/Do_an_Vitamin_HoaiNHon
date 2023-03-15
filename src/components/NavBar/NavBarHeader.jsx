import React from "react";
import "./NavBarHeader.scss";
import { NavLink } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import SearchPage from "../Pages/SearchPage";
import HomePage from "../Pages/HomePage";

export default function NavBarHeader() {
  return (
    <div>
      <div className="container-header">
        <div className="logo-shop container-header-item">
          <img src="../../../public/img/icons/logo.jpg"></img>
        </div>
        <div className="container-header-menu container-header-item-center">
          <ul className="container-header-menu-list">
            <li>
              <NavLink href="/">HOME</NavLink>
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
          <Link to="/search">
            <img src="../../../public/img/icons/search.svg" />
          </Link>
          <Link>
            <img src="../../../public/img/icons/bag.svg" />
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
