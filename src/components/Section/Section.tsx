import styles from './Section.module.scss';

export const Section: React.FC = () => {
  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.sectionTitle}>Section Title</h1>
      <p className={styles.sectionContent}>Section Content</p>
    </div>
  );
};
