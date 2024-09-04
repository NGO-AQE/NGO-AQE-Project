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


export interface HomeSection {
  _id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  linkNames: string[];
}


export type LanguageDependent = Omit<SanityData, 'language'>;
