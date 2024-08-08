import Button from '../../Button/Button';
import s from './TrainingCard.module.scss';
import DoneIcon from '../../../assets/icons/done.svg';

type Term = {
  location?: string;
  title?: string;
  start: string;
  end: string;
};

type Training = {
  img: string;
  mainLocation: string;
  terms: Term[];
  learningModule: string;
  statusIcon: string;
  requiredLevel: string;
};

const convertDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return formatDate(date);
};

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const calculateDuration = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return `from ${daysDiff} days`;
};

export const TrainingCard = ({
  img,
  mainLocation,
  terms,
  learningModule,
  statusIcon,
  requiredLevel,
}: Training): JSX.Element => {
  const statusIconDone = () => {
    if (statusIcon === 'Need') {
      return <img src={DoneIcon} alt="Done" className={s.card__statusIcon} />;
    }
    return '-';
  };

  return (
    <div className={s.card}>
      <img src={img} alt="img" className={s.card__img} />
      <h1 className={s.card__location}>
        <span className={s['card__location-element']}></span>
        {mainLocation}
      </h1>
      <div className={s.card__infoWrapper}>
        <div>
          {terms.map((term, i) => (
            <div key={i} className={s.card__termRow}>
              <p className={s.card__termText}>
                {term.location ? `${term.location}: ` : `${term.title} `}
              </p>
              <p className={s.card__termDates}>
                {convertDate(term.start)} - {convertDate(term.end)}
              </p>
            </div>
          ))}
        </div>
        <div className={s.card__detailGroup}>
          <p className={s.card__duration}>Duration:</p>
          <p className={s.card__value}>
            {terms.length > 0
              ? calculateDuration(terms[0].start, terms[0].end)
              : '-'}
          </p>
        </div>
        <div className={s.card__detailGroup}>
          <p className={s.card__label}>{learningModule}</p>
          <p className={s.card__value}>{statusIconDone()}</p>
        </div>
        <div className={s.card__detailGroup}>
          <p className={s.card__label}>Required English level</p>
          <p className={s.card__value}>{requiredLevel}</p>
        </div>
      </div>
      <h2 className={s.card__moreInfo}>Want more info?</h2>
      <Button className={s.card__button}>Get info package</Button>
    </div>
  );
};

export default TrainingCard;
