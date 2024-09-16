import { useEffect, useState } from 'react';

import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';
import Button from '../Button/Button';
import Logo from '../../assets/icons/Logo.png';
import NavLinks from './NavLinks/NavLinks';
import sectionStyles from '../../styles/sectionAndContainer.module.scss';
import styles from './Header.module.scss';
import useDetectScroll from '@smakss/react-scroll-direction';

const Header = () => {
  const scrollDirection = useDetectScroll();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.active : ''} ${scrollDirection.scrollDir === 'up' || scrollDirection.scrollPosition.top < 400 ? '' : styles.hideMenu}`}
    >
      <div className={`${styles.header__container} ${sectionStyles.container}`}>
        <img className={styles.header__img} src={Logo} alt="logo" />
        <NavLinks closeMenu={closeMenu} />{' '}
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
        <NavLinks isMobile closeMenu={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
