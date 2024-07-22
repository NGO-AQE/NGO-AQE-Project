import { FunctionComponent } from 'react';
import styles from './NavLinks.module.scss';

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks: FunctionComponent<NavLinksProps> = ({ isMobile }) => {
  return (
    <ul className={`${styles.navlinks} ${isMobile ? styles['navlinks--mobile'] : ''}`}>
      <li>
        <a className={styles.navlink} href="">
          Home
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          About us
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          Trainings
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          Gallery
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          Stories
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          Partners
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="">
          FAQ
        </a>
      </li>
      <li className={styles.navlink__customSelect}>
        <select className={styles.navlink__languageSelector} name="select-language">
          <option value="en">English</option>
          <option value="pl">Polish</option>
          <option value="fr">French</option>
        </select>
      </li>
    </ul>
  );
};

export default NavLinks;