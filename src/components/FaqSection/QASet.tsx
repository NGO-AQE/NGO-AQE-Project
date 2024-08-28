import { FC, useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import faqArrow from '../../assets/icons/faqArrow.svg';
import s from './FaqSection.module.scss';

export const QASet: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (!answerRef.current || !iconRef.current) return;

    if (animationRef.current) {
      animationRef.current.kill();
    }

    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(iconRef.current, {
        rotate: 270,
        opacity: 0.5,
        duration: 0.2,
        ease: 'power3.out',
      })
        .fromTo(
          answerRef.current,
          { maxHeight: 0, paddingTop: 0, opacity: 0 },
          {
            maxHeight: 1000,
            opacity: 1,
            paddingTop: 16,
            duration: 0.4,
            ease: 'power3.out',
          }
        )
    } else {
      tl.to(iconRef.current, {
        rotate: 90,
        opacity: 1,
        duration: 0.2,
        ease: 'power3.in',
      })
        .fromTo(
          answerRef.current,
          { opacity: 1, maxHeight: answerRef.current.scrollHeight, paddingTop: 16 },
          {
            opacity: 0,
            maxHeight: 0,
            paddingTop: 0,
            duration: 0.2,
            ease: 'power3.in'
          }
        )
    }

    animationRef.current = tl;

    return () => {
      animationRef.current?.kill();
    };
  }, [isOpen]);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)} className={s.card}>
      <div className={s.question}>
        <span className={s.text}>{question}</span>
        <img
          ref={iconRef}
          className={s.icon}
          src={faqArrow}
          alt="arrow"
        />
      </div>

      <div ref={answerRef} className={`${s.answer}`}>
        {answer}
      </div>
    </div>
  );
};