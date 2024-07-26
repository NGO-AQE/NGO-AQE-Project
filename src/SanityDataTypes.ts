export type SanityData = {
  [key: string]: object[];
  language: Language[];
};

//add new doc types

type Language = {
  code: string;
  title: string;
};
