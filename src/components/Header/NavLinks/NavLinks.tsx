import Select, { SingleValue, StylesConfig } from 'react-select';
import { FunctionComponent, useContext, useEffect } from 'react';
import styles from './NavLinks.module.scss';
import { SanityContext } from '../../../SanityContext';
import { useSanity } from '../../../hooks/useSanity';

interface OptionType {
  value: string;
  label: string;
}

interface NavLinksProps {
  isMobile?: boolean;
  className?: string;
  closeMenu?: () => void;
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
    fontSize: '18px',
    background: '#fcfcfc',
    '@media (min-width: 744px)': {
      fontSize: '24px',
    },
    '@media (min-width: 1440px)': {
      fontSize: '16px',
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

const NavLinks: FunctionComponent<NavLinksProps> = ({
  isMobile,
  className,
  closeMenu,
}) => {
  const sanity = useContext(SanityContext);
  const { navLinks } = useSanity();
  if (!sanity) {
    throw new Error('SanityContext is not provided');
  }

  const handleLanguageChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      const newLangCode = selectedOption.value;
      sanity.changeLanguage(newLangCode);

      window.history.replaceState({}, '', `/${newLangCode}`);
    }
  };

  const handleLinkClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  };

  useEffect(() => {
    console.log(navLinks);
  }, [navLinks]);

  if (!navLinks) return null;

  return (
    <nav className={styles.container}>
      <ul
        className={`${styles.navlinks} ${isMobile ? styles['navlinks--mobile'] : ''} ${className}`}
      >
        {navLinks.links.map((link, i) => (
          <li key={i}>
            <a
              className={styles.navlink}
              href={link.to}
              onClick={handleLinkClick}
            >
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
            defaultValue={
              languageOptions.find(
                option => option.value === sanity.selectedLanguage,
              ) || languageOptions[0]
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
