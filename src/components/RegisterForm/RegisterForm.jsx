import { useId } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegisterForm.module.css';
import toast from 'react-hot-toast';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Required field!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Required field!'),
  password: Yup.string()
    .required('Required field!')
    .min(8, 'Password must be at least 8 characters!')
    .matches(/\d/, 'Password must contain at least one digit!'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('You`ve  successfully signed in'))
      .catch(error => {
        error.status === 400 &&
          toast.error(
            'A user with such data is already signed in. Please enter other data.'
          );
      })
      .finally(() => actions.resetForm());
  };

  return (
    <div className={css.formWrap}>
      <div className={css.wrapTitleForm}>
        <h1 className={css.title}>Sign Up</h1>
        <p className={css.message}>
          Signup now and get full access to our app.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form autoComplete="on">
          <div className={css.fieldGroup}>
            <div className={css.fieldWrap}>
              <label htmlFor={nameFieldId} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Enter name..."
                className={css.input}
              />

              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <div className={css.fieldWrap}>
              <label htmlFor={emailFieldId} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email..."
                id={emailFieldId}
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <div className={css.fieldWrap}>
              <label htmlFor={passwordFieldId} className={css.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password..."
                id={passwordFieldId}
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={css.errorMsg}
              />
            </div>
          </div>
          <div className={css.submitWrap}>
            <p className={css.loginMessage}>
              Already have an account?&nbsp;
              <NavLink to="/login" className={css.loginLink}>
                Log In
              </NavLink>
            </p>

            <button type="submit" className={css.submitBtn}>
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
