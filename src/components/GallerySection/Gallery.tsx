import useEmblaCarousel from 'embla-carousel-react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

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

  return (
    <section className={styles.container}>
      <div className={styles.gallerySection}>
        <h2 className={styles.gallerySection__title}>Gallery</h2>
        <p className={styles.gallerySection__description}>
          Step into a world where learning comes to life and inspiration knows
          no bounds. In this vibrant space, we invite you to explore captivating
          moments captured during our educational camps for teachers.
        </p>
        <div className={styles.gallerySection__container}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
              {pictures.map((data, index) => (
                <div className={styles.embla__slide} key={index}>
                  <div
                    className={`${styles.img__container} ${styles[`img__container--${index + 1}`]}`}
                  >
                    <img src={data.image} alt={data.subtitle} />
                    <div className={styles.img__subtitle}>{data.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
