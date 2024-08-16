import faqArrow from '../../assets/icons/faqArrow.svg';
import s from './FaqSection.module.scss';
import { useState } from 'react';

export const FaqSection = () => {
  const data = {
    title: 'Frequently asked questions',
    faq: [
      {
        question:
          'Can I access the community forum on my mobile device, or is it only available on desktop computers?',
        answer: 'Yes, sure. Our platform is available on mobile devices.',
      },
      {
        question: 'Is there a registration fee to access the forum?',
        answer: 'No, there is no fee.',
      },
      {
        question: 'Can I create new discussion threads or topics in the forum?',
        answer:
          'Any user can start discussions on new topics, withing the community guideline rules.',
      },
      {
        question:
          'Are there moderators who oversee forum activity and enforce community guidelines?',
        answer: 'Of course, we keep up a safe environment for our users.',
      },
      {
        question: 'Can I private message other members within the forum?',
        answer: 'No, every message is available for all to see.',
      },
      {
        question:
          'Can I receive notifications for replies or updates to discussions I`m involved in?',
        answer:
          'Yes, you can receive notifications through email, or our mobile app.',
      },
    ],
    footerText: 'Didn`t find the answer?',
    footerLink: 'Contact us',
  };

  return (
    <section id="faq" className={'section container ' + s.section}>
      <header className={'section__title ' + s.title}>{data.title}</header>
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

const QASet = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(p => !p)} className={s.card}>
      <div className={s.question}>
        <span className={s.text}> {question}</span>
        <img
          className={`${s.icon} ${isOpen ? s.open : s.closed}`}
          src={faqArrow}
          alt="arrow"
        />
      </div>

      <div className={`${s.answer} ${isOpen ? s.open : s.closed}`}>
        {answer}
      </div>
    </div>
  );
};
