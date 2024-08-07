import s from './HomePage.module.scss';
import WorldMap from '/img/World Map.svg';
import Button from '../Button/Button';

export const HomePage = () => {
  return (
    <section className={s['container']}>
      <div className={s['home-page']}>
        <div className={s['home-page__title-container']}>
          <h1 className={s['home-page__title']}>
            Empower with AQE Educate.
            <div className={s['home-page__title-element']}></div>
          </h1>
          <p className={s['home-page__paragraph']}>
            Your trusted partner in professional development for educators.
          </p>
        </div>
        <Button className={s['home-page__button-tablet']}>
          Get info package
        </Button>
        <div className={s['home-page__img-wrapper']}>
          {' '}
          <img className={s['home-page__img']} src={WorldMap} alt="World Map" />
        </div>
        <div className={s['home-page__container-links']}>
          <a href="#" className={s['home-page__link']}>
            Malta
          </a>
          <a href="#" className={s['home-page__link']}>
            Canary
          </a>
          <a href="#" className={s['home-page__link']}>
            Ireland
          </a>
        </div>
        <Button className={s['home-page__button']}>Get info package </Button>
      </div>
    </section>
  );
};
