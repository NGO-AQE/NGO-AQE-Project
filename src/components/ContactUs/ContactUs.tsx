import React from 'react';
import { useSanity } from '../../hooks/useSanity';
import s from './ContactUs.module.scss';

interface ContactUsProps {
  language: string;
}

export const ContactUs: React.FC<ContactUsProps> = () => {
  const { contactUs } = useSanity();

  if (!contactUs) {
    return <div>Dane kontaktowe nie są dostępne.</div>;
  }

  const {
    title,
    email,
    officeHours,
    address,
    mapLink,
    phoneNumber,
    translations,
  } = contactUs;

  return (
    <section className={`section ${s.container}`}>
      <div className={s.contact}>
        <h1 className={s.contact__title}>{title}</h1>
        <address className={s.contact__address}>
          <div>
            <h4 className={s.contact__label}>{translations.emailLabel}</h4>
            <a
              href={`mailto:${email}`}
              type="email"
              className={s.contact__description}
            >
              {email}
            </a>
          </div>
          <div className={s.contact__officeDesktop}>
            <h4 className={s.contact__label}>
              {translations.officeHoursLabel}
            </h4>
            <p className={s.contact__description}>{officeHours}</p>
          </div>
          <div>
            <h4 className={s.contact__label}>{translations.addressLabel}</h4>
            <a
              href={mapLink}
              type="address"
              className={s.contact__description}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </div>
          <div className={s.contact__officeMobile}>
            <h4 className={s.contact__label}>
              {translations.officeHoursLabel}
            </h4>
            <p className={s.contact__description}>{officeHours}</p>
          </div>
          <div>
            <h4 className={s.contact__label}>
              {translations.phoneNumberLabel}
            </h4>
            <a
              href={`tel:${phoneNumber}`}
              type="tel"
              className={s.contact__description}
            >
              {phoneNumber}
            </a>
          </div>
        </address>
      </div>
    </section>
  );
};

export default ContactUs;
