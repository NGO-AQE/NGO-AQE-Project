import TrainingCard from './TrainingCard/TrainingCard';
import s from './TrainingsSection.module.scss';
import Malta from '../../../public/img/tranings/malta.png';
import Canary from '../../../public/img/tranings/canary.png';
import Ireland from '../../../public/img/tranings/ireland.png';

enum EnglishLevel {
  Basic = 'Basic',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

enum IconStatus {
  Need = 'Need',
  NoNeed = 'NoNeed',
}

type Training = {
  img: string;
  mainLocation: string;
  terms: {
    location?: string;
    start: string;
    end: string;
  }[];
  learningModule: string;
  statusIcon: IconStatus;
  requiredLevel: EnglishLevel;
};

export const TrainingsSection = () => {
  const trainingsContent: Training[] = [
    {
      img: Malta,
      mainLocation: 'Malta',
      terms: [
        {
          start: '2024-07-28',
          end: '2024-08-03',
        },
        {
          start: '2024-08-04',
          end: '2024-08-10',
        },
      ],
      learningModule: 'Learning english module',
      statusIcon: IconStatus.Need,
      requiredLevel: EnglishLevel.Basic,
    },
    {
      img: Canary,
      mainLocation: 'Canary',
      terms: [
        {
          location: 'Fuerteventura',
          start: '2024-07-13',
          end: '2024-07-19',
        },
        {
          location: 'Lanzarote',
          start: '2024-07-20',
          end: '2024-07-26',
        },
      ],
      learningModule: 'Learning english module',
      statusIcon: IconStatus.Need,
      requiredLevel: EnglishLevel.Intermediate,
    },
    {
      img: Ireland,
      mainLocation: 'Ireland',
      terms: [
        {
          start: '2024-07-28',
          end: '2024-10-08',
        },
        {
          start: '2024-08-04',
          end: '2024-08-10',
        },
      ],
      learningModule: 'Learning english module',
      statusIcon: IconStatus.Need,
      requiredLevel: EnglishLevel.Intermediate,
    },
  ];

  return (
    <section className={s.section}>
      <h1 className={s.section__title}>Trainings</h1>
      <p className={s.section__description}>
        Our programs at AQE are designed to cater to the diverse needs of
        educators at every stage of their career.
      </p>
      <div className={s.section__container}>
        {trainingsContent.map((training, i) => (
          <TrainingCard key={i} {...training} />
        ))}
      </div>
    </section>
  );
};

export default TrainingsSection;
