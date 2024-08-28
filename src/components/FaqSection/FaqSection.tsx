import { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { QASet } from './QASet';
import s from './FaqSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const FaqSection: FC = () => {
  const data = {
    title: 'Frequently asked questions',
    faq: [
      {
        question: 'Can I access the community forum on my mobile device, or is it only available on desktop computers?',
        answer: 'Yes, sure. Our platform is available on mobile devices.',
      },
      {
        question: 'Is there a registration fee to access the forum?',
        answer: 'No, there is no fee.',
      },
      {
        question: 'Can I create new discussion threads or topics in the forum?',
        answer: 'Any user can start discussions on new topics, within the community guideline rules.',
      },
      {
        question: 'Are there moderators who oversee forum activity and enforce community guidelines?',
        answer: 'Of course, we keep up a safe environment for our users.',
      },
      {
        question: 'Can I private message other members within the forum?',
        answer: 'No, every message is available for all to see.',
      },
      {
        question: 'Can I receive notifications for replies or updates to discussions I`m involved in?',
        answer: 'Yes, you can receive notifications through email, or our mobile app.',
      },
    ],
    footerText: 'Didn`t find the answer?',
    footerLink: 'Contact us',
  };

  const faqSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!faqSectionRef.current) return;

    const faqCards = faqSectionRef.current.querySelectorAll(`.${s.card}`);
    faqCards.forEach(card => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 20%',
            end: 'bottom 20%',
            scrub: true,
            markers: false,
          },
        }
      );
    })
  }, []);

  return (
    <section id="faq" className={`section container ${s.section}`} ref={faqSectionRef}>
      <header className={`section__title ${s.title}`}>{data.title}</header>
      <div className={s.faq}>
        {data.faq.map((qa, i) => (
          <QASet key={i} {...qa} />
        ))}
      </div>

      <footer className={s.footer}>
        <span className={s.footerText}>{data.footerText + ' '}</span>
        <a className={s.footerLink} href="">
          {data.footerLink}
        </a>
      </footer>
    </section>
  );
};