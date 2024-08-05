import { FunctionComponent } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import styles from './NavLinks.module.scss';
import { useSanity } from '../../../hooks/useSanity';

interface OptionType {
  value: string;
  label: string;
}

const links = [
  { text: 'Home', to: '#' },
  { text: 'About us', to: '#' },
  { text: 'Trainings', to: '#' },
  { text: 'Gallery', to: '#' },
  { text: 'Stories', to: '#' },
  { text: 'Partners', to: '#' },
  { text: 'FAQ', to: '#' },
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
  className?: string;
}

const NavLinks: FunctionComponent<NavLinksProps> = ({
  isMobile,
  className,
}) => {
  const { documents, changeLanguage } = useSanity();
  const languageOptions = (documents?.language || []).map(lang => ({
    value: lang.code,
    label: lang.title,
  }));
  // Handle language change
  const handleLanguageChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      changeLanguage(selectedOption.value);
    }
  };

  return (
    <nav className={styles.container}>
      <ul
        className={`${styles.navlinks} ${isMobile ? styles['navlinks--mobile'] : ''} ${className}`}
      >
        {links.map(link => (
          <li>
            <a className={styles.navlink} href={link.to}>
              {link.text}
            </a>
          </li>
        ))}
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
    </nav>
  );
};

export default NavLinks;
