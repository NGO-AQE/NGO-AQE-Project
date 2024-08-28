import { useSanity } from '../../hooks/useSanity';
import s from './ContactUs.module.scss';

export const ContactUs = () => {
  const { contactUs } = useSanity();

  if (!contactUs) {
    return <div>No avaliable.</div>;
  }

  return (
    <section className={s.container}>
      <div className={s.contact}>
        <h1 className={s.contact__title}>{contactUs.title}</h1>
        <address className={s.contact__address}>
          <div>
            <h4 className={s.contact__label}>Email</h4>
            <a
              href={`mailto:${contactUs.email}`}
              type="email"
              className={s.contact__description}
            >
              {contactUs.email}
            </a>
          </div>
          <div className={s.contact__officeDesktop}>
            <h4 className={s.contact__label}>Office Hours</h4>
            <p className={s.contact__description}>{contactUs.officeHours}</p>
          </div>
          <div>
            <h4 className={s.contact__label}>Address</h4>
            <a
              href={contactUs.mapLink}
              type="address"
              className={s.contact__description}
            >
              {contactUs.address}
            </a>
          </div>
          <div className={s.contact__officeMobile}>
            <h4 className={s.contact__label}>Office Hours</h4>
            <p className={s.contact__description}>{contactUs.officeHours}</p>
          </div>
          <div>
            <h4 className={s.contact__label}>Phone Number</h4>
            <a
              href={`tel:${contactUs.phoneNumber}`}
              type="tel"
              className={s.contact__description}
            >
              {contactUs.phoneNumber}
            </a>
          </div>
        </address>
      </div>
    </section>
  );
};

export default ContactUs;
