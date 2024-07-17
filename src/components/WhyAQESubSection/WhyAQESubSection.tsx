import styles from './WhyAQESubSection.module.scss';

type WhyAQESSProps = {
  icon: string;
  subtitle: string;
  text: string;
};

const WhyAQESS = ({ icon, subtitle, text }: WhyAQESSProps): JSX.Element => {
  return (
    <div className={styles.why__section}>
      <img src={icon} alt="section-icon" className={styles.why__img} />
      <p className={styles.why__subtitle}>{subtitle}</p>
      <p className={styles.why__text}>{text}</p>
    </div>
  );
};

export default WhyAQESS;
