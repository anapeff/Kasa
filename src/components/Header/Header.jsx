import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div> 
    <h1 className={styles.h1}>Header</h1>
    <p>Texte Header.</p>
  </div>
  );
}

export default Header;