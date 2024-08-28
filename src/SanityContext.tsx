import React, { createContext, useEffect, useState } from 'react';
import { ContactUs, Language, PartnersSection } from './SanityDataTypes';
import {
  fetchContactUs,
  fetchLanguages,
  fetchPartnersSection,
} from './utils/sanityFetch';

export interface SanityContextType {
  contactUs: ContactUs | null;
  partnersSection: PartnersSection | null;
  languages: Language[] | null;
  loading: boolean;
  error: Error | null;
  selectedLanguage: string;
  changeLanguage: (newLang: string) => void;
}

export const SanityContext = createContext<SanityContextType | undefined>(
  undefined,
);

const defaultLanguageCode = 'en';

const SanityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguageCode);
  const [languages, setLanguages] = useState<Language[] | null>(null);
  const [partnersSection, setPartnersSection] =
    useState<PartnersSection | null>(null);
  const [contactUs, setContactUs] = useState<ContactUs | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const changeLanguage = (newLangCode: string) => {
    if (!loading && languages) {
      const langCodes = languages.map(l => l.code);
      if (langCodes.includes(newLangCode)) {
        window.history.replaceState({}, '', `/${newLangCode}`);
        setSelectedLanguage(newLangCode);
      } else {
        window.history.replaceState({}, '', `/${defaultLanguageCode}`);
        setSelectedLanguage(defaultLanguageCode);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchLanguages()
      .then(data => setLanguages(data))
      .catch(err => {
        console.error('Error fetching languages:', err);
        setError(err as Error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!languages) return;

    setLoading(true);

    Promise.all([
      fetchPartnersSection(selectedLanguage).then(data =>
        setPartnersSection(data),
      ),
      fetchContactUs(selectedLanguage).then(data => setContactUs(data)),
    ])
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err as Error);
      })
      .finally(() => setLoading(false));
  }, [languages, selectedLanguage]);

  return (
    <SanityContext.Provider
      value={{
        selectedLanguage,
        changeLanguage,
        partnersSection,
        contactUs,
        languages,
        loading,
        error,
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};

export { SanityProvider };
