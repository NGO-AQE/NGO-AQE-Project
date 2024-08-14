import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';
import Logo from '../../assets/icons/Logo.png';
import NavLinks from './NavLinks/NavLinks';
import sectionStyles from '../../styles/sectionAndContainer.module.scss';
import styles from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.active : ''}`}>
      <div className={`${styles.header__container} ${sectionStyles.container}`}>
        <img src={Logo} alt="logo" />
        <NavLinks />
        <div className={styles.header__buttons}>
          <a href="#form">
            <button className={`${styles.header__button} button`}>
              Get info
            </button>
          </a>
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
