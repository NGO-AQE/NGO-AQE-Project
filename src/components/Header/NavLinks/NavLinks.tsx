import { FunctionComponent } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
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

const customStyles: StylesConfig<OptionType, false> = {
  control: provided => ({
    ...provided,
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
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
}

const NavLinks: FunctionComponent<NavLinksProps> = ({ isMobile }) => {
  // Handle language change
  const handleLanguageChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      console.log('Selected language:', selectedOption.value);
      // Implement the language change logic here
    }
  };

  return (
    <ul
      className={`${styles.navlinks} ${isMobile ? styles['navlinks--mobile'] : ''}`}
    >
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
        <Select
          options={languageOptions}
          styles={customStyles}
          placeholder="Select language"
          onChange={handleLanguageChange}
          defaultValue={languageOptions[0]} // Set default value to English
        />
      </li>
    </ul>
  );
};

export default NavLinks;
