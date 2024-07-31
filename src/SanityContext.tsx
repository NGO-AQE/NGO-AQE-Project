import React, { createContext, useEffect, useState } from 'react';

import { SanityData } from './SanityDataTypes';
import { createClient } from '@sanity/client';

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

const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false, //less efficient, but better for development
  apiVersion: '2022-03-07',
};

if (!sanityConfig.projectId) {
  throw new Error('No project ID in environment variables');
}

const sanity = createClient(sanityConfig);

const SanityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); //this is just the language code
  const [documents, setDocuments] = useState<SanityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const changeLanguage = (newLang: string) => {
    if (!loading) {
      const options = documents?.language.map(l => l.code);
      if (options?.includes(newLang)) {
        window.history.replaceState({}, '', newLang);
        setSelectedLanguage(newLang);
      } else {
        window.history.replaceState({}, '', 'en');
        setSelectedLanguage('en');
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const newData = {} as SanityData;
        const res = await sanity.fetch('*');

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
