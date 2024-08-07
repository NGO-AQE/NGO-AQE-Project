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
  console.log(date);
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

  return ` from ${daysDiff} days`;
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
      <div className={s.card_infoWrapper}>
        <h1 className={s.card__location}>{mainLocation}</h1>
        <div className={s.card__terms}>
          {terms.map((term, i) => (
            <p key={i} className={s.card__term}>
              {term.location ? `${term.location}: ` : `${term.title} `}
              {convertDate(term.start)} - {convertDate(term.end)}
            </p>
          ))}
        </div>
        <p className={s.card__duration}>
          Duration:
          <span>
            {terms.length > 0
              ? calculateDuration(terms[0].start, terms[0].end)
              : 'N/A'}
          </span>
        </p>
        <p className={s.card__module}>
          {learningModule}
          <span className={s.card__status}>{statusIconDone()}</span>
        </p>
        <p className={s.card__level}>
          Required English level
          <span className={s.card__status}>{requiredLevel}</span>
        </p>
      </div>
      <h2 className={s.card__moreInfo}>Want more info?</h2>
      <Button className={s.card__button}>Get info package</Button>
    </div>
  );
};

export default TrainingCard;
