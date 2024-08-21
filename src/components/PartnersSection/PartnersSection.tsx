import { Slider } from '../Slider';
import styles from './PartnersSection.module.scss';
import { useSanity } from '../../hooks/useSanity';

const PartnersSection = () => {
  const { partnersSection } = useSanity();

  if (!partnersSection) {
    return;
  }

  return (
    <Slider
      id="partners"
      title={partnersSection.title}
      buttonsPlacment="title"
      slidesOtside
    >
      {partnersSection.partners.map(partner => {
        return (
          <Slider.Slide key={partner._id}>
            <div>
              <img src={partner.image} alt={`${partner.name} image`} />
              <p className={styles.description}>{partner.name}</p>
            </div>
          </Slider.Slide>
        );
      })}
    </Slider>
  );
};

export default PartnersSection;
