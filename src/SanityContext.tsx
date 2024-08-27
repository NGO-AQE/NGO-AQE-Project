import React, { createContext, useEffect, useState } from 'react';

import { Language, PartnersSection, WhyAQESection } from './SanityDataTypes';
import { fetchLanguages, fetchPartnersSection, fetchWhyAQESection } from './utils/sanityFetch';

export interface SanityContextType {
  partnersSection: PartnersSection | null;
  whyAQESection: WhyAQESection | null;
  languages: Language[] | null;
  loading: boolean;
  error: Error | null;
  selectedLanguage: string | null;
  changeLanguage: (newLang: string) => void;
}

export const SanityContext = createContext<SanityContextType | undefined>(
  undefined,
);

const defaultLanguageCode = 'en';

const SanityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguageCode);
  const [languages, setLanguages] = useState<Language[] | null>([]);
  const [partnersSection, setPartnersSection] =
    useState<PartnersSection | null>(null);
  const [whyAQESection, setWhyAQESection] =
    useState<WhyAQESection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const changeLanguage = (newLangCode: string) => {
    if (!loading) {
      const langs = languages;
      const langCodes = langs?.map(l => l.code);

      if (langCodes?.includes(newLangCode) && langs) {
        window.history.replaceState({}, '', newLangCode);
        setSelectedLanguage(newLangCode);
      } else {
        window.history.replaceState({}, '', 'en');
        setSelectedLanguage(defaultLanguageCode);
      }
    }
  };

  useEffect(() => {
    fetchLanguages()
      .then(data => setLanguages(data))
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err as Error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!languages) {
      return;
    }

    setLoading(true);

    Promise.all([
      fetchPartnersSection(selectedLanguage).then(data =>
        setPartnersSection(data),
      ),
      fetchWhyAQESection(selectedLanguage).then(data =>
        setWhyAQESection(data)
      ),
    ])
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err as Error);
      })
      .finally(() => setLoading(false));
  }, [languages, selectedLanguage]); //add language if we should refetch data after it changes

  return (
    <SanityContext.Provider
      value={{
        selectedLanguage,
        changeLanguage,
        partnersSection,
        whyAQESection,
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
