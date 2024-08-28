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
        <h1 className={s.contact__title}>Contact Us</h1>
        <address className={s.contact__address}>
          <div>
            <h4 className={s.contact__label}>Email</h4>
            <a
              href="mailto:john.doe@example.com"
              type="email"
              className={s.contact__description}
            >
              john.doe@example.com
            </a>
          </div>
          <div className={s.contact__officeDesktop}>
            <h4 className={s.contact__label}>Office Hours</h4>
            <p className={s.contact__description}>
              Monday-Friday, 9:00 AM - 5:00 PM (excluding holidays)
            </p>
          </div>
          <div>
            <h4 className={s.contact__label}>Address</h4>
            <a
              href="https://www.google.pl/maps/place/Main+St,+Queens,+NY,+Stany+Zjednoczone/@40.7359783,-73.8276689,17z/data=!3m1!4b1!4m6!3m5!1s0x89c260618039000d:0x4e4216fa03a650cf!8m2!3d40.7359743!4d-73.825094!16s%2Fm%2F0gvtrf7?hl=pl&entry=ttu"
              type="address"
              className={s.contact__description}
            >
              123 Main Street, Cityville, State, Zip Code
            </a>
          </div>
          <div className={s.contact__officeMobile}>
            <h4 className={s.contact__label}>Office Hours</h4>
            <p className={s.contact__description}>
              Monday-Friday, 9:00 AM - 5:00 PM (excluding holidays)
            </p>
          </div>
          <div>
            <h4 className={s.contact__label}>Phone Number</h4>
            <a
              href="tel:+15551234567"
              type="tel"
              className={s.contact__description}
            >
              +1 (555) 123-4567
            </a>
          </div>
        </address>
      </div>
    </section>
  );
};

export default ContactUs;
