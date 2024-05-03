import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          height: '80px',
          width: '100%',
          backgroundColor: 'lightcyan',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
