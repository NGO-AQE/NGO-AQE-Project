export type SanityData = {
  partnersSection: PartnersSection;
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

export type LanguageDependent = Omit<SanityData, 'language'>;
