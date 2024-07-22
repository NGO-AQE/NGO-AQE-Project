import { FC, PropsWithChildren, useCallback } from 'react';
import styles from '../../styles/sectionAndContainer.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { align } from './utils';
import { ButtonsPlacment, SliderContext } from './SliderContext';
import { Slide } from './Slide';
import { ButtonGroup } from './ButtonsGroup';
import { Slides } from './Slides';

interface Props extends PropsWithChildren {
  title: string;
  text?: string;
  slidesToShow?: number;
  slidesOtside?: true;
  buttonsPlacment: ButtonsPlacment;
}

interface SubComponents {
  Slide: typeof Slide;
}

export const Slider: FC<Props> & SubComponents = ({
  title,
  slidesToShow,
  slidesOtside,
  buttonsPlacment,
  children,
  text,
}) => {
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

  const contextValue = {
    flexBasis,
    buttonsPlacment,
    scrollNext,
    scrollPrev,
    emblaRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <div className={`flex flex-col gap-8 ${styles.section}`}>
        <div className={styles.container}>
          <div className="flex items-center md:justify-between">
            <h2 className={styles.section__title}>{title}</h2>
            {buttonsPlacment === 'title' && <ButtonGroup />}
          </div>
          {text && (
            <p
              className={`${styles.section__description} text-left mt-4 md:mt-8`}
            >
              {text}
            </p>
          )}
          {!slidesOtside && <Slides>{children}</Slides>}
        </div>
        {slidesOtside && <Slides>{children}</Slides>}
      </div>
    </SliderContext.Provider>
  );
};

Slider.Slide = Slide;
