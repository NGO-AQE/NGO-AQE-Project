import styles from './WhyAQE.module.scss';

type WhyAQESSProps = {
  data: string[];
};

const WhyAQESS = ({ data }: WhyAQESSProps): JSX.Element => {
  const [icon, subtitle, text] = data;

  return (
    <div className={styles.why__section}>
      <img src={icon} alt="section-icon" className={styles.why__img} />
      <p className={styles.why__subtitle}>{subtitle}</p>
      <p className={styles.why__text}>{text}</p>
    </div>
  );
};

export default WhyAQESS;
