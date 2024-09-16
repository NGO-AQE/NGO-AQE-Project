import { client } from '../SanityClient';
import { ContactUs, Language, PartnersSection, WhyAQESection, HomeSection, GallerySection, TrainingsSection, AboutUsSection, FAQSection, Links } from '../SanityDataTypes';

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

export function fetchTrainingsSection(
  language: string,
): Promise<TrainingsSection> {
  return client.fetch(`*[_type == 'trainingsSection'][0] {
  _id,
  "title": title[_key == "${language}"][0].value,
  "description": description[_key == "${language}"][0].value,
  "infoTitle": infoTitle[_key == "${language}"][0].value,
  "infoButton": infoButton[_key == "${language}"][0].value,
  cards[] -> {
    _id,
    "image": image.asset->url,
    "title": title[_key == "${language}"][0].value,
    "firstTermLabel": firstTermLabel[_key == "${language}"][0].value,
    "firstTermValue": firstTermValue[_key == "${language}"][0].value,
    "secondTermLabel": secondTermLabel[_key == "${language}"][0].value,
    "secondTermValue": secondTermValue[_key == "${language}"][0].value,
    "durationLabel": durationLabel[_key == "${language}"][0].value,
    "durationValue": durationValue[_key == "${language}"][0].value,
    "moduleLabel": moduleLabel[_key == "${language}"][0].value,
    "levelLabel": levelLabel[_key == "${language}"][0].value,
    "levelValue": levelValue[_key == "${language}"][0].value,
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

export function fetchAboutSection(language: string): Promise<AboutUsSection> {
  return client.fetch(`*[_type == 'aboutSection'][0] {
    _id,
    "title": title[_key == "${language}"][0].value,
    subsections[] -> {
      _id,
      "subtitle": subtitle[_key == "${language}"][0].value,
      "info": description[_key == "${language}"][0].value
    },
    "img": image.asset->url
  }`);
}

export const fetchFAQSection = async (lang: string): Promise<FAQSection> => {
  return client.fetch(`*[_type == "FAQSection"][0] {
    _id,
    "title": title[_key == "${lang}"][0].value,
    faq[] -> {
      _id,
      "question": question[_key == "${lang}"][0].value,
      "answer": answer[_key == "${lang}"][0].value
    },
    "footerText": footerText[_key == "${lang}"][0].value,
    "footerLink": footerLink[_key == "${lang}"][0].value
  }`);
};

export const fetchNavLinks = async (lang: string): Promise<Links> => {
  return client.fetch(`*[_type == "navLinks"][0] {
    "links": links[] {
      "text": text[_key == "${lang}"][0].value,
      "to": to
    }
  }`);
}



