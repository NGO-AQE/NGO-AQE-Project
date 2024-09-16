import {
  AboutUsSection,
  ContactUs,
  FAQSection,
  FormSection,
  GallerySection,
  HomeSection,
  Language,
  PartnersSection,
  StoriesSection,
  TrainingsSection,
  WhyAQESection,
  Links,
} from './SanityDataTypes';
import React, { createContext, useEffect, useState } from 'react';
import {
  fetchAboutSection,
  fetchContactUs,
  fetchFAQSection,
  fetchFormSection,
  fetchGallerySection,
  fetchHomeSection,
  fetchLanguages,
  fetchPartnersSection,
  fetchStoriesSection,
  fetchTrainingsSection,
  fetchWhyAQESection,
  fetchNavLinks,
} from './utils/sanityFetch';

export interface SanityContextType {
  aboutUsSection: AboutUsSection | null;
  contactUs: ContactUs | null;
  partnersSection: PartnersSection | null;
  whyAQESection: WhyAQESection | null;
  gallerySection: GallerySection | null;
  formSection: FormSection | null;
  trainingsSection: TrainingsSection | null;
  storiesSection: StoriesSection | null;
  homePage: HomeSection | null;
  languages: Language[] | null;
  loading: boolean;
  error: Error | null;
  selectedLanguage: string;
  changeLanguage: (newLang: string) => void;
  faqSection: FAQSection | null;
  navLinks: Links | null;
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
  const [whyAQESection, setWhyAQESection] = useState<WhyAQESection | null>(
    null,
  );
  const [gallerySection, setGallerySection] = useState<GallerySection | null>(
    null,
  );
  const [formSection, setFormSection] = useState<FormSection | null>(null);
  const [trainingsSection, setTrainingsSection] =
    useState<TrainingsSection | null>(null);
  const [storiesSection, setStoriesSection] = useState<StoriesSection | null>(
    null,
  );
  const [homePage, setHomePage] = useState<HomeSection | null>(null);
  const [aboutUsSection, setAboutUsSection] = useState<AboutUsSection | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [faqSection, setFaqSection] = useState<FAQSection | null>(null);
  const [navLinks, setNavLinks] = useState<Links | null>(null);
  
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
      fetchWhyAQESection(selectedLanguage).then(data => setWhyAQESection(data)),
      fetchGallerySection(selectedLanguage).then(data =>
        setGallerySection(data),
      ),
      fetchFormSection(selectedLanguage).then(data => setFormSection(data)),
      fetchTrainingsSection(selectedLanguage).then(data =>
        setTrainingsSection(data),
      ),
      fetchHomeSection(selectedLanguage).then(data => setHomePage(data)),
      fetchStoriesSection(selectedLanguage).then(data =>
        setStoriesSection(data),
      ),
      fetchAboutSection(selectedLanguage).then(data => setAboutUsSection(data)),
      fetchFAQSection(selectedLanguage).then(data => setFaqSection(data)),
      fetchNavLinks(selectedLanguage).then(data => setNavLinks(data)),
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
        storiesSection,
        aboutUsSection,
        whyAQESection,
        gallerySection,
        formSection,
        trainingsSection,
        homePage,
        languages,
        loading,
        error,
        faqSection,
        navLinks,
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};

export { SanityProvider };
