import AboutUsCard from './AboutUsCard';
import s from './AboutUs.module.scss';
import styles from '../../styles/sectionAndContainer.module.scss';

const data = [
  {
    subtitle: 'Our mission',
    info: 'Through innovative training initiatives and personalized support, we aim to equip educators with the knowledge, skills, and confidence needed to inspire lifelong learning and academic success in their students.',
  },
  {
    subtitle: 'Our vision',
    info: 'Our vision at AQE is to create a world where every educator has access to high-quality training and resources, empowering them to foster a dynamic and enriching learning environment for all students.',
  },
];

const AboutUs = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>About Us</h2>
        <div className={s.container}>
          <div className={s.info_container}>
            {data.map((ele, i) => (
              <AboutUsCard
                key={i}
                subtitle={ele.subtitle}
                description={ele.info}
              />
            ))}
          </div>
          <div className={s.img_container}>
            <img src="/img/AboutUsPicture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
