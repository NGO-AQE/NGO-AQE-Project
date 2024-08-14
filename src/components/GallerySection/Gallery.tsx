import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Gallery.module.scss'; // Adjust path as needed
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

const pictures = [
  {
    image: '/img/MaltaPic.png',
    subtitle: 'Malta, 2020',
  },
  {
    image: '/img/IrelandPic.png',
    subtitle: 'Ireland, 2022',
  },
  {
    image: '/img/CanaryPic.png',
    subtitle: 'Canary isl, 2023',
  },
];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Check if emblaApi is properly initialized
      console.log('Embla API Initialized:', emblaApi);
    }
  }, [emblaApi]);

  return (
    <section className={styles.container}>
      <div className={styles.gallerySection}>
        <h2 className={styles.gallerySection__title}>Gallery</h2>
        <p className={styles.gallerySection__description}>
          Explore our gallery with swipe and button navigation.
        </p>
        <div className={styles.gallerySection__container}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {pictures.map((data, index) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={styles.img__container}>
                    <img src={data.image} alt={data.subtitle} />
                    <div className={styles.img__subtitle}>{data.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.embla__prev} onClick={scrollPrev}>
              <img src={leftArrow} alt="Previous" />
            </button>
            <button className={styles.embla__next} onClick={scrollNext}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;