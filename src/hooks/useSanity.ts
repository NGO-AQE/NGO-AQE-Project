import { SanityContext, SanityContextType } from '../SanityContext';

import { useContext } from 'react';

export function useSanity(): SanityContextType {
  const context = useContext(SanityContext);
  if (!context) {
    throw new Error('useSanity must be used within a SanityProvider');
  }
  return context;
}
