import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';
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

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <div>
          <label className={styles.section__subtitle} htmlFor="fullName*">
            Full Name*
          </label>
          <input
            className={styles.section__input}
            {...register('fullName', { required: true })}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div>
          <label className={styles.section__subtitle} htmlFor="email*">
            Email*
          </label>
          <input
            className={styles.section__input}
            {...register('email', {
              required: 'This is required',
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: 'Entered value does not match email format',
              },
            })}
            placeholder="aqe@email.com"
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className={styles.section__subtitle} htmlFor="country">
            Country
          </label>
          <input
            className={styles.section__input}
            {...register('country')}
            placeholder="Poland"
          />
          {errors.country && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div>
          <label className={styles.section__subtitle} htmlFor="agree">
            <input {...register('agree')} type="checkbox" />I agree to receive
            information about further courses from AQE.
          </label>
          {errors.agree && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.section__button}>
          <Button type="submit" onClick={openModal}>
            Get info package
          </Button>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        Email with the training info has been successfully sent.
      </Modal>
    </section>
  );
};

export default Form;
