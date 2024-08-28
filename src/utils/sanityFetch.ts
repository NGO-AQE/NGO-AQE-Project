import { client } from '../SanityClient';
import { ContactUs, Language, PartnersSection } from '../SanityDataTypes';

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

export function fetchLanguages(): Promise<Language[]> {
  return client.fetch(`*[_type == "language"] {
  _id,
  title,
  code,
}
`);
}

export async function fetchContactUs(language: string): Promise<ContactUs> {
  const query = `*[_type == "contactUs" && language == $language][0]{
    _id,
    title,
    email,
    officeHours,
    address,
    mapLink,
    phoneNumber
  }`;
  return client.fetch(query, { language });
}
