import React, { useCallback, useState } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import classNames from 'classnames';
import sendMail from '../../sendMail';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { useSanity } from '../../hooks/useSanity';

type FormData = {
  fullName: string;
  email: string;
  country: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const { formSection } = useSanity();

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

      <section id="form" className={`section--form section`}>
        <div className={styles.form__title}>
          <p className={`section__title--form`}>{formSection?.title}</p>
        </div>
        <div className={styles.form__description}>
          <p className={`section__description--form`}>
            {formSection?.description}
          </p>
        </div>

        <form
          className={`container ${styles.form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="fullName*">
              {formSection?.nameLabel}
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
              {...register('fullName', {
                required: formSection?.fieldMissingError,
              })}
              placeholder={formSection?.namePlaceholder}
            />
            <div
              className={`${styles.form__errorMessage} ${errors.fullName ? styles.visible : ''}`}
            >
              {errors.fullName?.message}
            </div>
          </div>

          <div className={styles.form__labelAndInput}>
            <label className={`section__subtitle--form`} htmlFor="email*">
              {formSection?.emailLabel}
            </label>
            <input
              id="email"
              className={classNames(styles.form__input, {
                [styles['form__input__active']]: watchEmail,
                [styles['form__input--default']]: !watchEmail,
                [styles['form__input__error']]: errors.email,
              })}
              {...register('email', {
                required: formSection?.fieldMissingError,
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: formSection?.fieldFormatError + '  ',
                },
              })}
              placeholder={formSection?.emailPlaceholder}
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
              {formSection?.countryLabel}
            </label>
            <input
              className={styles.form__input}
              {...register('country')}
              placeholder={formSection?.countryPlaceholder}
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
              <input {...register('agree')} type="checkbox" />
              {formSection?.checkboxLabel}
            </label>
          </div>

          <Button className={styles.form__button} type="submit">
            {formSection?.buttonLabel}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Form;
