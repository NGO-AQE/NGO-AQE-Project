import { useState } from 'react';
import Logo from '../../assets/icons/Logo.png';
import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';
import NavLinks from './NavLinks/NavLinks';

import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={Logo} alt="logo" className={styles.header__img} />
        <NavLinks />
        <div className={styles.header__buttons}>
          <button className={`${styles.header__button} button`}>
            Get info
          </button>
          <button onClick={toggleMenu}>
            <img
              src={isMenuOpen ? BurgerClosed : Burger}
              alt={isMenuOpen ? 'close menu' : 'open menu'}
              className={styles.header__burger}
            />
          </button>
        </div>
      </div>
      <div
        className={`${styles.header__menu} ${isMenuOpen ? styles.active : ''}`}
      >
        <NavLinks isMobile />
      </div>
    </header>
  );
};

export default Header;
