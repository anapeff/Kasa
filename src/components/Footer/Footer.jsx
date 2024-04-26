import React from 'react';
import './_footer.scss';
import kasaBlack from '../../images/kasablack.svg'; 

function Footer() {
    return (
    <div>
        <footer id="footer">
            <img className="logo" src={kasaBlack} alt="Kasa Logo"/>
            <span>Ⓒ 2020 Kasa. All right reserved</span>
        </footer>
    </div>
    );
  }
  export default Footer;