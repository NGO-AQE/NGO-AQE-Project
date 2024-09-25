import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import modalButton from '../../assets/icons/modalButton.png';
import modalError from '../../assets/icons/modalError.png';
import modalSuccess from '../../assets/icons/modalSuccess.png';
import s from './Modal.module.scss';

interface CustomProps {
  modalType: 'custom';
  iconSrc: string;
  title: string;
  description: React.ReactElement | string;
}

interface PreparedProps {
  modalType: 'error' | 'success';
  email: string;
}

interface FunctionalProps {
  isOpen: boolean;
  closer: () => void;
}

const Modal: React.FC<
  (CustomProps | PreparedProps) & FunctionalProps
> = props => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: '-100%', rotate: 60, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, duration: 0.7, ease: 'power4.out' },
      );
      gsap.fromTo(
        backRef.current,
        { opacity: 0 },
        { opacity: 0.95, duration: 0.3 },
      );
    }
  }, [props.isOpen]);

  const willClose = () => {
    gsap.to(modalRef.current, {
      scaleX: 0,
      duration: 0.3,
      onComplete: props.closer,
    });
    gsap.to(backRef.current, { opacity: 0, duration: 0.3 });
  };

  if (!props.isOpen) {
    return null;
  }

  let data;

  if (props.modalType === 'custom') {
    data = {
      icon: props.iconSrc,
      title: props.title,
      description: props.description,
    };
  } else {
    data = {
      error: {
        icon: modalError,
        title: 'Error',
        description: (
          <>
            Email with the training info has <span className={s.red}>NOT </span>
            been sent to <span className={s.bold}>{props?.email}.</span>
          </>
        ),
      },
      success: {
        icon: modalSuccess,
        title: 'Success',
        description: (
          <>
            Email with the training info has been sent to
            <span className={s.bold}> {props?.email} </span>
            <span className={s.green}>successfully.</span>
          </>
        ),
      },
    }[props.modalType];
  }

  return (
    <div
      data-id="modal"
      onClick={e => {
        if (e.target === e.currentTarget) {
          willClose();
        }
      }}
      className={s.back}
      ref={backRef}
    >
      <div className={s.modal} ref={modalRef}>
        <img
          onClick={willClose}
          src={modalButton}
          className={s.button}
          alt="Close"
        />
        <img src={data.icon} className={s.icon} alt="Icon" />
        <div className={s.title + ' ' + s.bold}>{data.title}</div>
        <div className={s.description}>{data.description}</div>
      </div>
    </div>
  );
};

export default Modal;
