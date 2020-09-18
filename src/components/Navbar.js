import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/luxuryCar' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='far fa-gem' />
             LUXURY
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/luxuryCar' className='nav-links' onClick={closeMobileMenu}>
                ACCUEIL
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/luxuryCar/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                to='/luxuryCar/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONNEXION
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONNEXION</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
