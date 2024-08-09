import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import styles from './Form.module.scss';

type FormData = {
  fullName: string;
  email: string;
  country: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: 'all' });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className={`section ${styles.section}`}>
      <h6 className={`section__title ${styles.section__title}`}>
        Get more in our info package
      </h6>
      <p className={`section__description ${styles.section__description}`}>
        Fill the form and we`ll send you a file with actual information
      </p>

      <form
        className={`container ${styles.container}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.section__field}>
          <label className={styles.section__subtitle} htmlFor="fullName*">
            Full Name*
          </label>
          <input
            className={styles.section__input}
            {...register('fullName', { required: true })}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <span className={styles.section__errorMessage}>Error name</span>
          )}
        </div>

        <div className={styles.section__field}>
          <label className={styles.section__subtitle} htmlFor="email*">
            Email*
          </label>
          <input
            className={styles.section__input}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: 'Entered value does not match email format',
              },
            })}
            placeholder="aqe@email.com"
          />
          {errors.email && (
            <span className={styles.section__errorMessage}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.section__field}>
          <label className={styles.section__subtitle} htmlFor="country">
            Country
          </label>
          <input
            className={styles.section__input}
            {...register('country')}
            placeholder="Poland"
          />
        </div>

        <div className={styles.section__agreement}>
          <label className={styles.section__subtitle} htmlFor="agree">
            <input {...register('agree')} type="checkbox" />
            <span className={styles.section__agree}>
              I agree to receive information about the further courses from AQE.
            </span>
          </label>
        </div>

        <Button className={styles.section__button} type="submit">
          Get info package
        </Button>
      </form>
    </section>
  );
};

export default Form;
