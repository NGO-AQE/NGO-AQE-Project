import { client } from '../SanityClient';
import { Language, PartnersSection, WhyAQESection } from '../SanityDataTypes';

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

export function fetchWhyAQESection(
  language: string,
): Promise<WhyAQESection> {
  return client.fetch(`*[_type == 'whyAQESection'][0] {
  _id,
  "title": title[_key == "${language}"][0].value,
  cards[] -> {
    _id,
    "image": image.asset->url,
    "subtitle": name[_key == "${language}"][0].value,
    "text": name[_key == "${language}"][0].value
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
