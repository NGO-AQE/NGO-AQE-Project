import { FC, PropsWithChildren, useCallback } from 'react';
import styles from '../../styles/sectionAndContainer.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { align } from './utils';
import { ButtonsPlacment, SliderContext } from './SliderContext';
import { Slide } from './components/Slide';
import { ButtonGroup } from './components/ButtonsGroup';
import { Slides } from './components/Slides';

import s from './Slider.module.scss';

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
  slidesToShow?: number; //number of full slides in view
  slidesOtside?: true; //determines if slides should be outside container taking full width of section
  buttonsPlacment: ButtonsPlacment; //buttons placment in title section or on the slider
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
  description,
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

  // flex basis used in slide for representing percent of slider view each slide takes
  //i added 1 to slides to show to make space for parts of prev and next slide
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
      <div className={`${s.slider} ${styles.section}`}>
        <div className={styles.container}>
          <div className={s.slider__header}>
            <h2 className={styles.section__title}>{title}</h2>
            {buttonsPlacment === 'title' && <ButtonGroup />}
          </div>
          {description && (
            <p className={styles.section__description}>{description}</p>
          )}
          {!slidesOtside && <Slides>{children}</Slides>}
        </div>
        {slidesOtside && <Slides>{children}</Slides>}
      </div>
    </SliderContext.Provider>
  );
};

Slider.Slide = Slide;
