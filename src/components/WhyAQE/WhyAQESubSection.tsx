import styles from './WhyAQE.module.scss';
type WhyAQESSProps = {
  data: {
    image: string;
    subtitle: string;
    text: string;
  };
};

const WhyAQESS = ({ data }: WhyAQESSProps): JSX.Element => {
  const { image, subtitle, text } = data;

  return (
    <div className={styles.whySection__subsection}>
      <img src={image} alt="section-icon" className={styles.whySection__img} />
      <p className={styles.whySection__subtitle}>{subtitle}</p>
      <p className={styles.whySection__text}>{text}</p>
    </div>
  );
};

export default WhyAQESS;
