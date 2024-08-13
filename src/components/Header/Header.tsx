import { useState } from 'react';
import Logo from '../../assets/icons/Logo.png';
import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';
import NavLinks from './NavLinks/NavLinks';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import sectionStyles from '../../styles/sectionAndContainer.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.active : ''}`}>
      <div className={`${styles.header__container} ${sectionStyles.container}`}>
        <img className={styles.header__img} src={Logo} alt="logo" />
        <NavLinks />
        <div className={styles.header__buttons}>
          <Button className={styles.header__button}>Get info</Button>
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
