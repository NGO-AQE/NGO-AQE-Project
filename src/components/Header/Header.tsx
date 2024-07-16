import { FunctionComponent, useState, useEffect } from 'react';
import Logo from '../../assets/icons/Logo.png';
import Burger from '../../assets/icons/burger-icon.svg';
import BurgerClosed from '../../assets/icons/burger-icon-closed.svg';

import './Header.scss';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
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
      <div className="header">
        <img src={Logo} alt="logo" className="header__img" />
        <div className="header__buttons">
          <button className="header__button button">Get info</button>
          <img
            src={Burger}
            alt="burger-icon"
            className="header__burger"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div
        id="overlay"
        className={`overlay ${isMenuOpen ? 'active' : ''}`}
      ></div>
      <div className={`header__menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="header">
          <img src={Logo} alt="logo" className="header__img" />
          <div className="header__buttons">
            <button className="header__button button">Get info</button>
            {isMenuOpen ? (
              <img
                src={BurgerClosed}
                alt="burger-icon-closed"
                className="header__burger"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src={Burger}
                alt="burger-icon"
                className="header__burger"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        <ul className="header__links">
          <li>
            <a className="header__link" href="">
              Home
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              About us
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              Trainings
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              Gallery
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              Stories
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              Partners
            </a>
          </li>
          <li>
            <a className="header__link" href="">
              FAQ
            </a>
          </li>
          <li className="header__customSelect">
            <select
              className="header__languageSelector"
              name="select-language"
              id=""
            >
              <option value="en">English</option>
              <option value="pl">Polish</option>
              <option value="fr">French</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
