import {
  ContactUs,
  GallerySection,
  Language,
  PartnersSection,
  WhyAQESection,
} from '../SanityDataTypes';

import { client } from '../SanityClient';

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

export function fetchWhyAQESection(language: string): Promise<WhyAQESection> {
  return client.fetch(`*[_type == 'whyAQESection'][0] {
  _id,
  "title": title[_key == "${language}"][0].value,
  cards[] -> {
    _id,
    "image": image.asset->url,
    "subtitle": subtitle[_key == "${language}"][0].value,
    "text": text[_key == "${language}"][0].value 
  }
}`);
}

export function fetchGallerySection(language: string): Promise<GallerySection> {
  return client.fetch(`*[_type == 'gallerySection'][0] {
  _id,
  "title": title[_key == "${language}"][0].value,
  "description": description[_key == "${language}"][0].value,
  cards[] -> {
    _id,
    "image": image.asset->url,
    "label": label[_key == "${language}"][0].value,
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

export const fetchContactUs = async (lang: string): Promise<ContactUs> => {
  return client.fetch('*[_type == "contactUs" && language == $lang][0]', {
    lang,
  });
};
