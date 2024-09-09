import { useRef, useEffect } from 'react';
import styles from '../../styles/sectionAndContainer.module.scss';
import s from './AboutUs.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutUsCard from './AboutUsCard';
import { useSanity } from '../../hooks/useSanity';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { aboutUsSection } = useSanity();

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(`.${s.card_container}`);

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  if (!aboutUsSection) return null;

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>{aboutUsSection.title}</h2>
        <div className={s.container} ref={containerRef}>
          <div className={s.info_container}>
            {aboutUsSection.subsections.map((card) => (
              <AboutUsCard
                key={card._id}
                subtitle={card.subtitle}
                description={card.info}
              />
            ))}
          </div>
          <div className={s.img_container}>
            <img src={aboutUsSection.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;
