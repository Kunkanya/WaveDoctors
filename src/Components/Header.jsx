import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
//import { Link } from 'react-router-dom';
import '../Style/Navbar.scss';
//import Logo from '../../src/asset/logo/wavedoctorLogoSGV.svg'


function Navbar() {

  const Logo = "asset/logo/wavedoctorLogoSGV.svg"
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

      <nav className='navbar fixed-top'>
        <div className='navbar-container'>
          <a className="navbar-logo" href='#hero-section' onClick={closeMobileMenu}>

            <img src={Logo} alt="Logo" />
            </a>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onClick={closeMobileMenu}>
              <a className="nav-links" href='#association-section'>L'association</a>
            </li>
            <li className='nav-item' onClick={closeMobileMenu}>
              <a className="nav-links" href='#events-section'>Évènements</a>
            </li>
            <li className='nav-item' onClick={closeMobileMenu}>
              <a className="nav-links" href='#teams-section'>Qui sommes nous?</a>
            </li>

            <li className='nav-item' onClick={closeMobileMenu}>
              <a className="nav-links" href='#contact-section'>Contact</a>
            </li>
            <li className='nav-item ' onClick={closeMobileMenu}>
              <a target="blank" className="nav-links member" href='https://www.helloasso.com/associations/wavedoctors/adhesions/formulaire-d-adhesion-a-l-association-wavedoctors/widget-bouton'>Devenir membre</a>
            </li>
          </ul>
          {button && ""}
        </div>
      </nav>                   
  );
}

export default Navbar;
