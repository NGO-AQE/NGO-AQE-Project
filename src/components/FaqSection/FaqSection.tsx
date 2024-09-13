import { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { QASet } from './QASet';
import s from './FaqSection.module.scss';
import { useSanity } from '../../hooks/useSanity';


gsap.registerPlugin(ScrollTrigger);

export const FaqSection: FC = () => {
  const { faqSection } = useSanity()
  const faqSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!faqSectionRef.current) return;

    const faqCards = faqSectionRef.current.querySelectorAll(`.${s.card}`);
    faqCards.forEach(card => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: true,
            markers: false,
          },
        }
      );
    })
  }, []);

  if (!faqSection) return null;

  return (
    <section id="faq" className={`section container ${s.section}`} ref={faqSectionRef}>
      <header className={`section__title ${s.title}`}>{faqSection.title}</header>
      <div className={s.faq}>
        {faqSection.faq.map((qa, i) => (
          <QASet key={i} {...qa} />
        ))}
      </div>

      <footer className={s.footer}>
        <span className={s.footerText}>{faqSection.footerText + ' '}</span>
        <a className={s.footerLink} href="">
          {faqSection.footerLink}
        </a>
      </footer>
    </section>
  );
};