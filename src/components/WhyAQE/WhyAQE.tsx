import styles from './WhyAQE.module.scss';
import briefcaseIcon from '../../assets/icons/material-symbols_work-outline.svg';
import batteryIcon from '../../assets/icons/mingcute_battery-4-line.svg';
import chartIcon from '../../assets/icons/mingcute_chart-bar-2-line.svg';
import lightbulbIcon from '../../assets/icons/mingcute_light-line.svg';
import WhyAQESS from './WhyAQESubSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import '../../styles/sectionAndContainer.module.scss';
import { useRef, useEffect } from 'react';
const WhyAQE = () => {
  const subsections = [
    {
      icon: lightbulbIcon,
      subtitle: 'Inspiring Environment',
      text: 'We create stimulating and inspiring atmosphere that encourages creativity, innovation, and a lifelong love for learning among educators.',
    },
    {
      icon: batteryIcon,
      subtitle: 'Refreshing Experience',
      text: 'We offer a break from the traditional setting, allowing teachers torejuvenate their passion for teaching through engaging and interactivecamp activities.',
    },
    {
      icon: briefcaseIcon,
      subtitle: 'Practical Application',
      text: 'We equip teachers with practical strategies and resources that they can immediately implement in classrooms to enhance student learning outcomes.',
    },
    {
      icon: chartIcon,
      subtitle: 'Professional Growth',
      text: 'We provide opportunities for teachers to earn continuing education credits, certifications, enhancing your professional credentials and career advancement.',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(`.${styles.whySection__subsection}`);

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
    <section id='whyAQE' className={`section ${styles.container}`}>
      <div className={styles.whySection}>
        <p className={styles.whySection__title}>Why AQE?</p>
        <div className={styles.whySection__container} ref={containerRef}>
          {subsections.map(data => (
            <WhyAQESS key={data.subtitle} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAQE;
