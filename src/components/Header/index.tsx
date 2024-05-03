import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [active, setActive] = useState('');

  const activeBtn = (name: string) => {
    setActive(name);
  };

  return (
    <header className="header">
      <Link to="/">Logo</Link>
      <nav className="header-right">
        <Link
          to="/"
          className={`header-link ${active === 'home' ? 'active' : ''}`}
          onClick={() => activeBtn('home')}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`header-link ${active === 'about' ? 'active' : ''}`}
          onClick={() => activeBtn('about')}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
