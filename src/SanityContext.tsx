import React, { createContext, useEffect, useState } from 'react';

import { SanityData } from './SanityDataTypes';
import { client } from './SanityClient';

export interface SanityContextType {
  documents: SanityData | null;
  loading: boolean;
  error: Error | null;
  selectedLanguage: string | null;
  changeLanguage: (newLang: string) => void;
}

export const SanityContext = createContext<SanityContextType | undefined>(
  undefined,
);

const defaultLanguageId = '5c699810-5457-434d-a6d7-64c20e74ebb3';

const SanityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguageId); //this is just the language id
  const [documents, setDocuments] = useState<SanityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const changeLanguage = (newLangCode: string) => {
    if (!loading) {
      const langs = documents?.language;
      const langCodes = langs?.map(l => l.code);

      if (langCodes?.includes(newLangCode) && langs) {
        window.history.replaceState({}, '', newLangCode);
        setSelectedLanguage(langs[langCodes?.indexOf(newLangCode)]._id);
      } else {
        window.history.replaceState({}, '', 'en');
        setSelectedLanguage(defaultLanguageId);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const newData = {} as SanityData;
        const res = await client.fetch('*');

        res.forEach((doc: { _type: string }) => {
          if (!newData[doc._type]) {
            newData[doc._type] = [];
          }
          newData[doc._type].push(doc);
        });
        setDocuments(newData);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, []); //add language if we should refetch data after it changes

  return (
    <SanityContext.Provider
      value={{
        selectedLanguage,
        changeLanguage,
        documents,
        loading,
        error,
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};

export { SanityProvider };
