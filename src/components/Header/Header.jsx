import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container _container">
        <div className="header__logo">
          <h1>Car Rental Company</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/catalog" className="header__nav-link">
                Catalog
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/favorites" className="header__nav-link">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
