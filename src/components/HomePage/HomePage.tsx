import Button from '../Button/Button';
import WorldMap from '/img/World Map.svg';
import s from './HomePage.module.scss';
import { useSanity } from '../../hooks/useSanity';

export const HomePage = () => {
  const { homePage } = useSanity();

  if (!homePage) {
    return;
  }

  return (
    <section id="home" className={s['container']}>
      <div className={s['home-page']}>
        <div className={s['home-page__title-container']}>
          <h1 className={s['home-page__title']}>
            {homePage.title}
            <div className={s['home-page__title-element']}></div>
          </h1>
          <p className={s['home-page__paragraph']}>
            {homePage.subtitle}
          </p>
        </div>
        <Button className={s['home-page__button-tablet']}>
          {homePage.buttonText}
        </Button>
        <div className={s['home-page__img-wrapper']}>
          {' '}
          <img className={s['home-page__img']} src={WorldMap} alt="World Map" />
        </div>
        <div className={s['home-page__container-links']}>
          {homePage.linkNames.map((link, i) => (
            <a
              key={i}
              href="#"
              className={s['home-page__link']}
            >
              {link}
            </a>
          ))}
        </div>
        <Button className={s['home-page__button']}>{homePage.buttonText}</Button>
      </div>
    </section>
  );
};
