import { useRef, useEffect } from 'react';
import styles from '../../styles/sectionAndContainer.module.scss';
import s from './AboutUs.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutUsCard from './AboutUsCard';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    subtitle: 'Our mission',
    info: 'Through innovative training initiatives and personalized support, we aim to equip educators with the knowledge, skills, and confidence needed to inspire lifelong learning and academic success in their students.',
  },
  {
    subtitle: 'Our vision',
    info: 'Our vision at AQE is to create a world where every educator has access to high-quality training and resources, empowering them to foster a dynamic and enriching learning environment for all students.'
  }
];

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(`.${s.card_container}`);

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100, // Left for even, right for odd
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

  return (

    <section id="about" className={`section ${styles.section}`}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>About Us</h2>
        <div className={s.container} ref={containerRef}>
          <div className={s.info_container}>
            {data.map((ele, i) => (
              <AboutUsCard
                key={i}
                subtitle={ele.subtitle}
                description={ele.info}
              />
            ))}
          </div>
          <div className={s.img_container}>
            <img src="/img/AboutUsPicture.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;
