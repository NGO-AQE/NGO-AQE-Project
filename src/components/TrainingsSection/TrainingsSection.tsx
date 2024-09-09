import TrainingCard from './TrainingCard/TrainingCard';
import s from './TrainingsSection.module.scss';
import { useSanity } from '../../hooks/useSanity';

export const TrainingsSection = () => {
  const { trainingsSection } = useSanity();

  return (
    <section id="trainings" className={s.container}>
      <div className={s.section}>
        <h1 className={s.section__title}>{trainingsSection?.title}</h1>
        <p className={s.section__description}>
          {trainingsSection?.description}
        </p>
        <div className={s.section__container}>
          {trainingsSection?.cards.map((training, i) => (
            <TrainingCard
              key={i}
              infoTitle={trainingsSection.infoTitle}
              infoButton={trainingsSection.infoButton}
              {...training}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
