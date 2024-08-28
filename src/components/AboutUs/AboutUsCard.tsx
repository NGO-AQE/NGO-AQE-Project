import { FC } from 'react';
import s from './AboutUs.module.scss';

interface IAboutUsCard {
  subtitle: string;
  description: string;
}
const AboutUsCard: FC<IAboutUsCard> = ({ subtitle, description }) => {
  return (
    <div className={s.card_container}>
      <h3 className="section__subtitle">{subtitle}</h3>
      <p className="section__description">{description}</p>
    </div>
  );
};
export default AboutUsCard;
