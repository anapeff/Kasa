import React from 'react';
import { NavLink } from 'react-router-dom';
import './_header.scss';
import LogoKasa from '../../images/kasa.svg';

function Header() {
  return (
    <div className='header'>
    <img className='header_logo' src={LogoKasa}/>
    <nav className='header_link'>            
        <NavLink exact="true" to="/" activeclassname="active">Accueil</NavLink> 
        <NavLink to="/about" activeclassname="active">A propos</NavLink> 
        
      </nav>
</div>
  );
}

export default Header;