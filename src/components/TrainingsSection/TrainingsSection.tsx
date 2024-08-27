import Canary from '../../../public/img/tranings/canary.png';
import Ireland from '../../../public/img/tranings/ireland.png';
import Malta from '../../../public/img/tranings/malta.png';
import TrainingCard from './TrainingCard/TrainingCard';
import s from './TrainingsSection.module.scss';

enum EnglishLevel {
  Basic = 'Basic',
  Intermediate = 'Interm.',
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
    title?: string;
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
          title: 'I term:',
          start: '2024-07-28',
          end: '2024-08-04',
        },
        {
          title: 'II term:',
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
      mainLocation: 'Canary Island',
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
          title: 'I term:',
          start: '2024-07-28',
          end: '2024-08-03',
        },
        {
          title: 'II term:',
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
    <section id="trainings" className={`section ${s.container}`}>
      <div className={s.section}>
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
      </div>
    </section>
  );
};

export default TrainingsSection;
