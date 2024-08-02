import { SanityDocument, SanityReference } from '@sanity/client';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type SanityData = {
  [key: string]: object[];
  language: Language[];
  partnersSection: PartnersSection[];
};

type LanguageReference = SanityReference & {
  _type: 'reference';
  _ref: string;
};

type Language = {
  code: string;
  title: string;
  _id: string;
};

type PartnersSection = SanityDocument & {
  titleSet: {
    language: LanguageReference;
    title: string;
  }[];
  partnersArray: {
    image: SanityImageSource;
    descriptionSet: {
      language: LanguageReference;
      description: string;
    }[];
  }[];
};
