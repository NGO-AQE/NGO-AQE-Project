import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button.tsx';
import styles from './Form.module.scss';
// import Modal from 'react-modal';

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
    formState: { errors, isValid },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    if (isValid) {
      // setModalIsOpen(true);
    } else {
      alert('Please fill out the form correctly before proceeding.');
    }
  }

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h6 className={`section__title ${styles.section__title}`}>
          Get more in our info package
        </h6>
        <p className={`section__description ${styles.section__description}`}>
          Fill the form and we`ll send you a file with actual information
        </p>

        <form className="section" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.labelAndInputContainer}>
            <label className={styles.section__subtitle} htmlFor="fullName*">
              Full Name*
            </label>
            <input
              className={styles.section__input}
              {...register('fullName', { required: true })}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <span className={styles.errorMessage}>
                This field is required
              </span>
            )}
          </div>

          <div className={styles.labelAndInputContainer}>
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
              <span className={styles.errorMessage}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={styles.labelAndInputContainer}>
            <label className={styles.section__subtitle} htmlFor="country">
              Country
            </label>
            <input
              className={styles.section__input}
              {...register('country', { required: true })}
              placeholder="Poland"
            />
            {errors.country && (
              <span className={styles.errorMessage}>
                This field is required
              </span>
            )}
          </div>

          <div className={styles.labelAndInputContainer}>
            <label className={styles.section__subtitle} htmlFor="agree"></label>
            <label className={styles.section__subtitle}>
              <input
                {...register('agree', { required: true })}
                type="checkbox"
              />
              I agree to receive information about further courses from AQE.
            </label>
            {errors.agree && (
              <span className={styles.errorMessage}>
                This field is required
              </span>
            )}
          </div>
        </form>

        <div className={styles.section__button}>
          <Button onClick={openModal}>Get info package</Button>
        </div>
      </div>
    </section>
  );
};

export default Form;
