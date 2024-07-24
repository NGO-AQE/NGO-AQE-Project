import { useState, useEffect } from 'react';
import Logo from '../../assets/icons/Logo.png';
import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';
import NavLinks from './NavLinks/NavLinks';

import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOverlayClick = () => {
      setIsMenuOpen(false);
    };

    const overlay = document.getElementById('overlay');
    if (overlay) {
      overlay.addEventListener('click', handleOverlayClick);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <img src={Logo} alt="logo" className={styles.header__img} />
        <NavLinks />
        <div className={styles.header__buttons}>
          <button className={`${styles.header__button} button`}>Get info</button>
          <img
            src={Burger}
            alt="burger-icon"
            className={styles.header__burger}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div id="overlay" className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}></div>
      <div className={`${styles.header__menu} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.header}>
          <img src={Logo} alt="logo" className={styles.header__img} />
          <div className={styles.header__buttons}>
            <button className={`${styles.header__button} button`}>Get info</button>
            {isMenuOpen ? (
              <img
                src={BurgerClosed}
                alt="burger-icon-closed"
                className={styles.header__burger}
                onClick={toggleMenu}
              />
            ) : (
              <img
                src={Burger}
                alt="burger-icon"
                className={styles.header__burger}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        <NavLinks isMobile />
      </div>
    </>
  );
};

export default Header;