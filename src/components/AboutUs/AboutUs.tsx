import styles from '../../styles/sectionAndContainer.module.scss';
import s from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>About Us</h2>
        <div className={s.container}>
          <div className={s.info_container}>
            <div className={s.card_container}>
              <h3 className={styles.section__subtitle}>Our mission</h3>
              <p className={styles.section__description}>Through innovative training initiatives and personalized support, we aim to equip educators with the <span className={s.selected_info}>knowledge, skills, and confidence needed</span> to inspire lifelong learning and academic success in their students.</p>
            </div>
            <div className={s.card_container}>
              <h3 className={styles.section__subtitle}>Our vision</h3>
              <p className={styles.section__description}>Our vision at AQE is to create a world where every educator has access to high-quality training and resources, empowering them to foster a <span className={s.selected_info}>dynamic and enriching learning environment</span> for all students.</p>
            </div>
          </div>
          <div className={s.img_container}>
            <img src="/img/AboutUsPicture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;