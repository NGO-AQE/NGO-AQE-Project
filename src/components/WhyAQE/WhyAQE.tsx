import styles from './WhyAQE.module.scss';
import briefcaseIcon from '../../assets/icons/material-symbols_work-outline.svg';
import batteryIcon from '../../assets/icons/mingcute_battery-4-line.svg';
import chartIcon from '../../assets/icons/mingcute_chart-bar-2-line.svg';
import lightbulbIcon from '../../assets/icons/mingcute_light-line.svg';
import WhyAQESS from './WhyAQESubSection';

const WhyAQE = () => {
  const firstSectionArr = [
    lightbulbIcon,
    'Inspiring Environment',
    'We create stimulating and inspiring atmosphere that encourages creativity, innovation, and a lifelong love for learning among educators.',
  ];
  const secondSectionArr = [
    batteryIcon,
    'Refreshing Experience',
    'We offer a break from the traditional setting, allowing teachers torejuvenate their passion for teaching through engaging and interactivecamp activities.',
  ];
  const thirdSectionArr = [
    briefcaseIcon,
    'Practical Application',
    'We equip teachers with practical strategies and resources that they can immediately implement in classrooms to enhance student learning outcomes.',
  ];
  const fourthSectionArr = [
    chartIcon,
    'Professional Growth',
    'We provide opportunities for teachers to earn continuing education credits, certifications, enhancing your professional credentials and career advancement.',
  ];
  return (
    <div className={styles.why}>
      <p className={styles.why__title}>Why AQE?</p>
      <WhyAQESS data={firstSectionArr} />
      <WhyAQESS data={secondSectionArr} />
      <WhyAQESS data={thirdSectionArr} />
      <WhyAQESS data={fourthSectionArr} />
    </div>
  );
};

export default WhyAQE;
