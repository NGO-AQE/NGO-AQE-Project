import { FC, PropsWithChildren, useCallback } from 'react';
import styles from './Slider.module.scss';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import useEmblaCarousel from 'embla-carousel-react';

interface Props extends PropsWithChildren {
  title: string;
}

export const Slider: FC<Props> = ({ title, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex gap-8 flex-col">
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
  );
};

export const Slide: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex-[0_0_auto] min-w-0 mr-6">{children}</div>
);
