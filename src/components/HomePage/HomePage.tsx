import Button from '../Button/Button';
import WorldMap from '/img/World Map.svg';
import s from './HomePage.module.scss';

export const HomePage = () => {
  const links = ['Malta', 'Canary', 'Ireland'];

  return (
    <section id="home" className={s['container']}>
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
          {links.map(link => (
            <a href={'#' + link.toLowerCase()} className={s['home-page__link']}>
              {link}
            </a>
          ))}
        </div>
        <Button className={s['home-page__button']}>
          <a href="#form">Get info package</a>
        </Button>
      </div>
    </section>
  );
};
