import Button from '../../Button/Button';
import s from './TrainingCard.module.scss';

type Training = {
  img: string;
  mainLocation: string;
  terms: {
    location?: string;
    start: string;
    end: string;
  }[];
  learningModule: string;
  statusIcon: string;
  requiredLevel: string;
};

export const TrainingCard = ({
  img,
  mainLocation,
  terms,
  learningModule,
  statusIcon,
  requiredLevel,
}: Training): JSX.Element => {
  return (
    <div className={s.card}>
      <img src={img} alt="img" className={s.card__img} />
      <h1 className={s.card__location}>{mainLocation}</h1>
      <div className={s.card__terms}>
        {terms.map((term, index) => (
          <p key={index} className={s.card__term}>
            {term.start} - {term.end}
          </p>
        ))}
      </div>
      <p className={s.card__duration}>
        Duration:
        <span>7days</span>
      </p>
      <p className={s.card__module}>
        {learningModule}
        <span className={s.card__status}>{statusIcon}</span>
      </p>
      <p className={s.card__level}>
        Required English level
        <span className={s.card__status}>{requiredLevel}</span>
      </p>
      <h2>Want more info?</h2>
      <Button>Get info package</Button>
    </div>
  );
};

export default TrainingCard;
