import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';
import LogoKasa from '../../images/kasa.svg';

function Header() {
  return (
    <header>
        <Link to="/"><img src={LogoKasa} alt='Kasa'/> </Link>
      <nav className="nav">

        <Link to="/"    className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
          >Accueil</Link>


        <Link to="/about"   className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
          >A Propos
          </Link>
      </nav>
   
    </header>
  );
}

export default Header;