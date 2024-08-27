import { Slider } from '../Slider';
import styles from './PartnersSection.module.scss';
import { useSanity } from '../../hooks/useSanity';

const PartnersSection = () => {
  const { partnersSection } = useSanity();

  if (!partnersSection) {
    return <div>No avaliable partners.</div>;
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider
        id="partners"
        title={partnersSection.title}
        buttonsPlacment="title"
        slidesOtside
      >
        {partnersSection.partners.map(partner => (
          <Slider.Slide key={partner._id}>
            <div className={styles.slide}>
              <img src={partner.image} alt={`${partner.name} image`} />
              <p className={styles.description}>{partner.name}</p>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
