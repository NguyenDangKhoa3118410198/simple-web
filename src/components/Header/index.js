import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav className="header-wrapper">
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/about" className="header-link">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
