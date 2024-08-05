import React from 'react';
import styles from './Footer.module.scss';
import sectionStyles from '../../styles/sectionAndContainer.module.scss';
import mateIcon from '../../assets/icons/maLogo.png';

const links = [
  { text: 'Home', to: '#' },
  { text: 'About us', to: '#' },
  { text: 'Trainings', to: '#' },
  { text: 'Gallery', to: '#' },
  { text: 'FAQ', to: '#' },
  { text: 'Stories', to: '#' },
  { text: 'Partners', to: '#' },
  { text: '+1 (555) 123-4567', to: 'tel:+15551234567' },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${sectionStyles.container}`}>
        {links.map(link => (
          <a key={link.text} className={styles.link} href={link.to}>
            {link.text}
          </a>
        ))}
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
