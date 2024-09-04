import '../../styles/sectionAndContainer.module.scss';

import WhyAQESS from './WhyAQESubSection';
import styles from './WhyAQE.module.scss';
import { useSanity } from '../../hooks/useSanity';

const WhyAQE = () => {
  const { whyAQESection } = useSanity();

  return (
    <section className={styles.container}>
      <div className={styles.whySection}>
        <p className={styles.whySection__title}>{whyAQESection?.title}</p>
        <div className={styles.whySection__container}>
          {whyAQESection?.cards.map(data => (
            <WhyAQESS key={data._id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAQE;
