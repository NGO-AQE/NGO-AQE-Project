import Select, { SingleValue, StylesConfig } from 'react-select';

import { FunctionComponent } from 'react';
import styles from './NavLinks.module.scss';

interface OptionType {
  value: string;
  label: string;
}

const languageOptions: OptionType[] = [
  { value: 'en', label: 'English' },
  { value: 'pl', label: 'Polish' },
  { value: 'fr', label: 'French' },
];

const links = [
  { text: 'Home', to: '#home' },
  { text: 'About us', to: '#about' },
  { text: 'Trainings', to: '#trainings' },
  { text: 'Gallery', to: '#gallery' },
  { text: 'Stories', to: '#stories' },
  { text: 'Partners', to: '#partners' },
  { text: 'FAQ', to: '#faq' },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: provided => ({
    ...provided,
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    '@media (min-width: 744px)': {
      fontSize: '24px',
    },
  }),

  menu: provided => ({
    ...provided,
    zIndex: 9999,
    padding: '4px',
    borderRadius: '0px 0px 15px 15px',
    borderRight: '1px solid #CFCFCF',
    borderBottom: '1px solid #CFCFCF',
    borderLeft: '1px solid #CFCFCF',
    background: '#FCFCFC',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#000',
    '&:hover': {
      color: '#000',
    },
  }),
};

interface NavLinksProps {
  isMobile?: boolean;
  className?: string;
}

const NavLinks: FunctionComponent<NavLinksProps> = ({
  isMobile,
  className,
}) => {
  // Handle language change
  const handleLanguageChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      console.log('Selected language:', selectedOption.value);
      // Implement the language change logic here
    }
  };

  return (
    <nav className={styles.container}>
      <ul
        className={`${styles.navlinks} ${isMobile ? styles['navlinks--mobile'] : ''} ${className}`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a className={styles.navlink} href={link.to}>
              {link.text}
            </a>
          </li>
        ))}
        <li>
          <Select
            options={languageOptions}
            styles={customStyles}
            placeholder="Select language"
            onChange={handleLanguageChange}
            defaultValue={languageOptions[0]} // Set default value to English
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
