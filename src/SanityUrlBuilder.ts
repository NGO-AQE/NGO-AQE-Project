import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './SanityClient';
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);

export function getImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
