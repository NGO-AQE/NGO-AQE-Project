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

export type ContactUs = {
  title: string;
  email: string;
  officeHours: string;
  address: string;
  mapLink: string;
  phoneNumber: string;
};

export type LanguageDependent = Omit<SanityData, 'language'>;
