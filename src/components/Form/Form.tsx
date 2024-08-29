import React, { useCallback, useState } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import sendMail from '../../sendMail';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

type FormData = {
  fullName: string;
  email: string;
  country: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: 'all' });

  const watchFullName = watch('fullName');
  const watchEmail = watch('email');
  const watchCountry = watch('country');

  const onSubmit = async ({ country, email, fullName }: FormData) => {
    const res = (await sendMail(email, fullName, country)) as {
      status: number;
    };

    setModalType(res.status === 200 ? 'success' : 'error');
  };

  const [modalType, setModalType] = useState<'closed' | 'success' | 'error'>(
    'closed',
  );

  const closeModal = useCallback(() => {
    setModalType('closed');
  }, []);

  return (
    <>
      <Modal
        modalType={modalType !== 'closed' ? modalType : 'error'}
        closer={closeModal}
        email={watch('email')}
        isOpen={modalType !== 'closed'}
      />

      <section id="form" className={`section--form`}>
        <div className={styles.form__title}>
          <p className={`section__title--form`}>Get more in our info package</p>
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
              id="fullName"
              style={{
                borderColor: watchFullName
                  ? 'form__input--active'
                  : 'form__input--default',
              }}
              className={classNames(styles.form__input, {
                [styles['form__input--active']]: watchFullName,
                [styles['form__input--default']]: !watchFullName,
                [styles['form__input--error']]: errors.fullName,
              })}
              {...register('fullName', { required: 'This field is required' })}
              placeholder="John Doe"
            />
            <div
              className={`${styles.form__errorMessage} ${errors.fullName ? styles.visible : ''}`}
            >
              {errors.fullName?.message}
            </div>
          </div>

          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="email*">
              Email*
            </label>
            <input
              id="email"
              className={classNames(styles.form__input, {
                [styles['form__input__active']]: watchEmail,
                [styles['form__input--default']]: !watchEmail,
                [styles['form__input__error']]: errors.email,
              })}
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: 'Entered value does not match email format',
                },
              })}
              placeholder="aqe@email.com"
              style={{
                borderColor: watchEmail
                  ? 'color.$primary-color'
                  : 'color.$gray-light',
              }}
            />
            <div
              className={`${styles.form__errorMessage} ${errors.email ? styles.visible : ''}`}
            >
              {errors.email?.message}
            </div>
          </div>

          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="country">
              Country
            </label>
            <input
              className={styles.form__input}
              {...register('country')}
              placeholder="Poland"
              style={{
                borderColor: watchCountry
                  ? 'color.$primary-color'
                  : 'color.$gray-light',
              }}
            />
          </div>

          <div>
            <label
              className={`section__subtitle--form ${styles.form__agreement}`}
              htmlFor="agree"
            >
              <input {...register('agree')} type="checkbox" />I agree to receive
              information about the further courses from AQE.
            </label>
          </div>

          <Button className={styles.form__button} type="submit">
            Get info package
          </Button>
        </form>
      </section>
    </>
  );
};

export default Form;
