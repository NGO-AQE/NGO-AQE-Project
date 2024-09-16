export type SanityData = {
  partnersSection: PartnersSection;
  contactUs: ContactUs | null;
};

// type LanguageReference = SanityReference & {
//   _type: 'reference';
//   _ref: string;
// };

export type Language = {
  code: string;
  title: string;
  _id: string;
};

export interface PartnersSection {
  _id: string;
  title: string;
  partners: Partner[];
}

interface Partner {
  _id: string;
  name: string;
  image: string;
}

export interface ContactUs {
  title: string;
  email: string;
  officeHours: string;
  address: string;
  mapLink: string;
  phoneNumber: string;
  translations: {
    emailLabel: string;
    officeHoursLabel: string;
    addressLabel: string;
    phoneNumberLabel: string;
  };
}

export interface WhyAQESection {
  _id: string;
  title: string;
  cards: WhyAQECard[];
}

interface WhyAQECard {
  _id: string;
  image: string;
  subtitle: string;
  text: string;
}

export interface GallerySection {
  _id: string;
  title: string;
  description: string;
  cards: GalleryCard[];
}

interface GalleryCard {
  _id: string;
  image: string;
  label: string;
}

export interface FormSection {
  _id: string;
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  checkboxLabel: string;
  buttonLabel: string;
  fieldMissingError: string;
  fieldFormatError: string;
}

export interface TrainingsSection {
  _id: string;
  title: string;
  description: string;
  infoTitle: string;
  infoButton: string;
  cards: TrainingsCard[];
}

export interface TrainingsCard {
  _id: string;
  image: string;
  title: string;
  firstTermLabel: string;
  firstTermValue: string;
  secondTermLabel: string;
  secondTermValue: string;
  durationLabel: string;
  durationValue: string;
  moduleLabel: string;
  levelLabel: string;
  levelValue: string;
}

export interface HomeSection {
  _id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  linkNames: string[];
}

export interface StoriesSection {
  _id: string;
  title: string;
  cards: StoriesCard[];
}

export interface StoriesCard {
  _id: string;
  image: string;
  description: string;
  label: string;
}

export interface FAQSection {
  _id: string;
  title: string;
  faq: FAQCard[];
  footerText: string;
  footerLink: string;
}

export interface FAQCard {
  _id: string;
  question: string;
  answer: string;
}

export interface Links {
  links: Array<{
    text: string;
    to: string;
  }>;
}

export interface AboutUsSection {
  _id: string;
  title: string;
  subsections: AboutUsCard[];
  img: string;
}

interface AboutUsCard {
  _id: string;
  subtitle: string;
  info: string;

}

export type LanguageDependent = Omit<SanityData, 'language'>;
