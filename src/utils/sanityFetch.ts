import { client } from '../SanityClient';
import { ContactUs, HomeSection, Language, PartnersSection } from '../SanityDataTypes';

export function fetchPartnersSection(
  language: string,
): Promise<PartnersSection> {
  return client.fetch(`*[_type == 'partnersSection'][0] {
  _id,
  "title": title[_key == "${language}"][0].value,
  partners[] -> {
    _id,
    "name": name[_key == "${language}"][0].value,
    "image": image.asset->url
  }
}`);
}

export function fetchHomeSection(
  language: string,
): Promise<HomeSection> {
  return client.fetch(`
    *[_type == 'homeSection'][0] {
      _id,
      "title": title[_key == "${language}"][0].value,
      "subtitle": subtitle[_key == "${language}"][0].value,
      "buttonText": buttonText[_key == "${language}"][0].value,
      "linkNames": linkNames[]
    }
  `);
}

export function fetchLanguages(): Promise<Language[]> {
  return client.fetch(`*[_type == "language"] {
  _id,
  title,
  code,
}
`);
}

export const fetchContactUs = async (lang: string): Promise<ContactUs> => {
  return client.fetch('*[_type == "contactUs" && language == $lang][0]', {
    lang,
  });
};
