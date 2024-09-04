import { useCallback, useEffect, useState } from 'react';

import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import styles from './Gallery.module.scss'; // Adjust path as needed
import useEmblaCarousel from 'embla-carousel-react';
import { useSanity } from '../../hooks/useSanity';

const Gallery = () => {
  const { gallerySection } = useSanity();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCanScrollNext(true);
      if (!emblaApi.canScrollPrev()) {
        setCanScrollPrev(false);
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCanScrollPrev(true);
      if (!emblaApi.canScrollNext()) {
        setCanScrollNext(false);
      }
    }
  }, [emblaApi]);

  const updateButtons = useCallback(() => {
    if (emblaApi) {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      updateButtons();
      emblaApi.on('select', updateButtons);
    }
  }, [emblaApi, updateButtons]);

  return (
    <section id="gallery" className={styles.container + ' gallery'}>
      <div className={styles.gallerySection}>
        <h2 className={styles.gallerySection__title}>
          {gallerySection?.title}
        </h2>
        <p className={styles.gallerySection__description}>
          {gallerySection?.description}
        </p>
        <div className={styles.gallerySection__container}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {gallerySection?.cards.map(({ _id, image, label }) => (
                <div className={styles.embla__slide} key={_id}>
                  <div className={styles.img__container}>
                    <img src={image} alt={label} />
                    <div className={styles.img__subtitle}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`${styles.embla__prev} ${!canScrollPrev ? styles.disabled : ''}`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <img src={leftArrow} alt="Previous" />
            </button>
            <button
              className={`${styles.embla__next} ${!canScrollNext ? styles.disabled : ''}`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
