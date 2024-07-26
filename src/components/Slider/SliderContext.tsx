import { createContext } from 'react';
import { UseEmblaCarouselType } from 'embla-carousel-react';

export type ButtonsPlacment = 'title' | 'slider';

interface SliderContextI {
  flexBasis?: string;
  scrollPrev?: () => void;
  scrollNext?: () => void;
  emblaRef?: UseEmblaCarouselType[0];
  buttonsPlacment?: ButtonsPlacment;
}

export const SliderContext = createContext<SliderContextI>({});
