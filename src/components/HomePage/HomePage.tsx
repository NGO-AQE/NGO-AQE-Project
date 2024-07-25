import s from './HomePage.module.scss';
import WorldMap from '../../../public/img/World Map.svg';
import Button from '../Button/Button';

export const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h5 className={s.title}>
          Empower with <br />
          <h5 className={s.subtitle}>AQE Educate.</h5>
        </h5>

        <p className={s.paragraph}>
          Your trusted partner in professional development for educators.
        </p>
      </div>
      <img className={s.img} src={WorldMap} alt="worldMap" />
      <div className={s.containerLinks}>
        <a href="#" className={s.link}>
          Malta
        </a>
        <a href="#" className={s.link}>
          Canary
        </a>
        <a href="#" className={s.link}>
          Ireland
        </a>
      </div>
      <Button className={s.button}>Get info package</Button>
    </div>
  );
};
