import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import sendMail from '../../sendMail.ts';

type FormData = {
  fullName: string;
  email: string;
  country: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: 'all' });

  const watchFullName = watch('fullName');
  const watchEmail = watch('email');
  const watchCountry = watch('country');

  const onSubmit = (data: FormData) => {
    sendMail(data.email, data.fullName, data.country).then(data =>
      console.log(data),
    );
  };

  return (
      <section id="form" className={`section--form`}>
        <div className={styles.form__title}>
          <p className={`section__title--form`}>
            Get more in our info package
          </p>
        </div>
        <div className={styles.form__description}>
            <p className={`section__description--form`}>
              Fill the form and we`ll send you a file with actual information
            </p>
        </div>

        <form
          className={`container ${styles.form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="fullName*">
                Full Name*
              </label>
              <input
                className={styles.form__input}
                {...register('fullName', { required: true })}
                placeholder="John Doe"
                style={{ borderColor: watchFullName ? 'color.$primary-color' : 'color.$gray-light' }}
              />
              {errors.fullName && (
                <span className={styles.form__errorMessage}>Error name</span>
              )}
          </div>

          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="email*">
              Email*
            </label>
            <input
              className={styles.form__input}
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: 'Entered value does not match email format',
                },
              })}
              placeholder="aqe@email.com"
              style={{ borderColor: watchEmail ? 'color.$primary-color' : 'color.$gray-light' }}
            />
            {errors.email && (
              <span className={styles.form__errorMessage}>
              {errors.email.message}
            </span>
            )}
          </div>

          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="country">
              Country
            </label>
            <input
              className={styles.form__input}
              {...register('country')}
              placeholder="Poland"
              style={{ borderColor: watchCountry ? 'color.$primary-color' : 'color.$gray-light' }}
            />
          </div>

            <div>
              <label className={`section__subtitle--form ${styles.form__agreement}`} htmlFor="agree">
                <input {...register('agree')} type="checkbox" />
              I agree to receive information about the further courses from AQE.
              </label>
            </div>

          <Button className={styles.form__button} type="submit">
            Get info package
          </Button>
        </form>
      </section>
  );
};

export default Form;
