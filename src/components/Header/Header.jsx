import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Car Rental Company</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="header__nav-link--active"
              className="header__nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/catalog"
              activeClassName="header__nav-link--active"
              className="header__nav-link"
            >
              Catalog
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/favorites"
              activeClassName="header__nav-link--active"
              className="header__nav-link"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
