import { createClient } from '@sanity/client';

const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false, //less efficient, but better for development
  apiVersion: '2022-03-07',
};

if (!sanityConfig.projectId) {
  throw new Error('No project ID in environment variables');
}

export const client = createClient(sanityConfig);
