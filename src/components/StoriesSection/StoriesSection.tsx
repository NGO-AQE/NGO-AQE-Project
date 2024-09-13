import { Slider } from '../Slider';
import s from './StoriesSection.module.scss';
import { useSanity } from '../../hooks/useSanity';

const StoriesSection = () => {
  const { storiesSection } = useSanity();

  if (!storiesSection) {
    return '';
  }

  return (
    <Slider
      id="stories"
      title={storiesSection?.title}
      buttonsPlacment="title"
      slidesOtside
    >
      {storiesSection.cards.map(({ _id, description, image, label }) => (
        <Slider.Slide key={_id}>
          <div className={s.card}>
            <img className={s.image} src={image} alt="label" />
            <div className={s.container}>
              {' '}
              <p className={s.description}>{description}</p>
              <span className={s.label}>{label}</span>
            </div>
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default StoriesSection;
