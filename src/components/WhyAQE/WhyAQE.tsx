import '../../styles/sectionAndContainer.module.scss';

import WhyAQESS from './WhyAQESubSection';
import styles from './WhyAQE.module.scss';
import { useSanity } from '../../hooks/useSanity';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const WhyAQE = () => {
  const { whyAQESection } = useSanity();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(
      `.${styles.whySection__subsection}`,
    );

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
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
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: true,
            markers: false,
          },
        },
      );
    });
  }, []);

  if (!whyAQESection) return;

  return (
    <section id="whyAQE" className={`section ${styles.container}`}>
      <div className={styles.whySection}>
        <p className={styles.whySection__title}>{whyAQESection.title}</p>
        <div className={styles.whySection__container} ref={containerRef}>
          {whyAQESection.cards.map(data => (
            <WhyAQESS key={data._id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAQE;
