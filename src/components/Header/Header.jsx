import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_header.scss';
import LogoKasa from '../../images/kasa.svg';

function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <img src={LogoKasa} alt="Kasa" />
      </Link>
      <nav className="nav">
        <Link
          to="/"
          className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`nav__link ${location.pathname === '/about' ? 'nav__link--active' : ''}`}
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;