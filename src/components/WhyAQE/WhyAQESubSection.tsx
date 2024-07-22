import styles from './WhyAQE.module.scss';
type WhyAQESSProps = {
  data: {
    icon: string;
    subtitle: string;
    text: string;
  };
};

const WhyAQESS = ({ data }: WhyAQESSProps): JSX.Element => {
  const { icon, subtitle, text } = data;

  return (
    <div className={styles.whySection__subsection}>
      <img src={icon} alt="section-icon" className={styles.whySection__img} />
      <p className={styles.whySection__subtitle}>{subtitle}</p>
      <p className={styles.whySection__text}>{text}</p>
    </div>
  );
};

export default WhyAQESS;
