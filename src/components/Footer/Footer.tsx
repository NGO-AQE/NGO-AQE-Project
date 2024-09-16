import React from 'react';
import mateIcon from '../../assets/icons/maLogo.png';
import sectionStyles from '../../styles/sectionAndContainer.module.scss';
import styles from './Footer.module.scss';
import { useSanity } from '../../hooks/useSanity';

const Footer: React.FC = () => {
  const { navLinks, contactUs } = useSanity();
  if (!navLinks || !contactUs) return null;

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${sectionStyles.container}`}>
        {navLinks.links.map(link => (
          <a key={link.text} className={styles.link} href={link.to}>
            {link.text}
          </a>
        ))}
        <a key={contactUs.phoneNumber} className={styles.link} href={`tel:${contactUs.phoneNumber}`}>
          {contactUs.phoneNumber}
        </a>
        <p className={`${styles.rightsText} ${styles.bottomRow}`}>
          Alliance for Quality Education. All rights reserved
        </p>
        <p className={`${styles.signature} ${styles.bottomRow}`}>
          By
          <img src={mateIcon} alt="Mate Academy" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
