import styles from './WhyAQE.module.scss';
import briefcaseIcon from '../../assets/icons/material-symbols_work-outline.svg';
import batteryIcon from '../../assets/icons/mingcute_battery-4-line.svg';
import chartIcon from '../../assets/icons/mingcute_chart-bar-2-line.svg';
import lightbulbIcon from '../../assets/icons/mingcute_light-line.svg';
import WhyAQESS from './WhyAQESubSection';

import '../../styles/sectionAndContainer.module.scss';
const WhyAQE = () => {
  const subsections = [
    {
      icon: lightbulbIcon,
      subtitle: 'Inspiring Environment',
      text: 'We create stimulating and inspiring atmosphere that encourages  creativity, innovation, and a lifelong love for learning among educators.',
    },
    {
      icon: batteryIcon,
      subtitle: 'Refreshing Experience',
      text: 'We offer a break from the traditional setting, allowing teachers torejuvenate their passion for teaching through engaging and interactivecamp activities.',
    },
    {
      icon: briefcaseIcon,
      subtitle: 'Practical Application',
      text: 'We equip teachers with practical strategies and resources that they can immediately implement in classrooms to enhance student learning outcomes.',
    },
    {
      icon: chartIcon,
      subtitle: 'Professional Growth',
      text: 'We provide opportunities for teachers to earn continuing education credits, certifications, enhancing your professional credentials and career advancement.',
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.whySection}>
        <p className={styles.whySection__title}>Why AQE?</p>
        <div className={styles.whySection__container}>
          {subsections.map(data => (
            <WhyAQESS key={data.subtitle} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAQE;
