import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';
import styles from './Slider.module.scss';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import { align } from './utils';

interface SliderContextI {
  flexBasis?: string;
}

const SliderContext = createContext<SliderContextI>({});

interface Props extends PropsWithChildren {
  title: string;
  slidesToShow?: number;
}

export const Slider: FC<Props> = ({ title, slidesToShow, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: true,
    align,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const flexBasis = slidesToShow ? `${100 / (slidesToShow + 1)}%` : undefined;

  return (
    <SliderContext.Provider value={{ flexBasis }}>
      <div className="flex gap-8 flex-col py-12 md:py-20">
        <div className="flex items-center md:justify-between px-4 md:px-5 lg:px-40">
          <h2 className={styles.title}>{title}</h2>
          <div className="hidden lg:flex lg:gap-10">
            <button className="p-0 w-12 h-12">
              <img
                className="w-12 h-12"
                src={leftArrow}
                alt="prev"
                onClick={scrollPrev}
              />
            </button>
            <button className="p-0 h-12 w-12">
              <img
                className="h-12 w-12"
                src={rightArrow}
                alt="next"
                onClick={scrollNext}
              />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>
      </div>
    </SliderContext.Provider>
  );
};

const StyledSlide = styled.div<{ $flexBasis?: string }>`
  ${({ $flexBasis }) => $flexBasis && `flex-basis: ${$flexBasis};`}
`;

export const Slide: FC<PropsWithChildren> = ({ children }) => {
  const { flexBasis } = useContext(SliderContext);

  return (
    <StyledSlide
      className="flex-none min-w-0 px-3 max-w-full"
      $flexBasis={flexBasis}
    >
      {children}
    </StyledSlide>
  );
};
