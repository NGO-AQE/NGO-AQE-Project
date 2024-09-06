import Button from '../../Button/Button';
import DoneIcon from '../../../assets/icons/done.svg';
import { TrainingsCard } from '../../../SanityDataTypes';
import s from './TrainingCard.module.scss';

interface props extends TrainingsCard {
  infoTitle: string;
  infoButton: string;
}

export const TrainingCard = ({
  durationLabel,
  durationValue,
  firstTermLabel,
  firstTermValue,
  image,
  levelLabel,
  levelValue,
  moduleLabel,
  secondTermLabel,
  secondTermValue,
  title,
  infoButton,
  infoTitle,
}: props): JSX.Element => {
  const dates = [
    { l: firstTermLabel, v: firstTermValue },
    { l: secondTermLabel, v: secondTermValue },
  ];

  return (
    <div className={s.card} id={title.split(' ')[0].toLowerCase()}>
      <img src={image} alt="img" className={s.card__img} />
      <h1 className={s.card__location}>
        <span className={s['card__location-element']}></span>
        {title}
      </h1>
      <div className={s.card__infoWrapper}>
        {dates.map(({ l, v }) => (
          <div key={v}>
            <div className={s.card__termRow}>
              <p className={s.card__termText}>{l}</p>
              <p className={s.card__termDates}>{v}</p>
            </div>
          </div>
        ))}

        <div className={s.card__detailGroup}>
          <p className={s.card__duration}>{durationLabel}</p>
          <p className={s.card__value}>{durationValue}</p>
        </div>
        <div className={s.card__detailGroup}>
          <p className={s.card__label}>{moduleLabel}</p>
          <p className={s.card__value}>
            <img src={DoneIcon} alt="Done" className={s.card__statusIcon} />
          </p>
        </div>
        <div className={s.card__detailGroup}>
          <p className={s.card__label}>{levelLabel}</p>
          <p className={s.card__value}>{levelValue}</p>
        </div>
      </div>
      <h2 className={s.card__moreInfo}>{infoTitle}</h2>
      <Button className={s.card__button}>
        <a href="#form">{infoButton}</a>
      </Button>
    </div>
  );
};

export default TrainingCard;
