import { useId } from 'react';
import { NavLink } from 'react-router-dom';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import toast from 'react-hot-toast';
import css from './LoginForm.module.css';

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Required field!'),
  password: Yup.string()
    .required('Required field!')
    .min(8, 'Password must be at least 8 characters!')
    .matches(/\d/, 'Password must contain at least one digit!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('You are successfully logged in'))
      .catch(
        error =>
          error.status === 400 &&
          toast.error('Incorrect login information for your personal account!')
      )
      .finally(actions.resetForm());
  };

  return (
    <div className={css.formWrap}>
      <h1 className={css.title}>Log In</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form autoComplete="on">
          <div className={css.fieldGroup}>
            <div className={css.fieldWrap}>
              <label htmlFor={emailFieldId} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Enter name..."
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <div>
              <label htmlFor={passwordFieldId} className={css.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id={passwordFieldId}
                placeholder="Enter password..."
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
              Don`t have an account?&nbsp;
              <NavLink to="/register" className={css.loginLink}>
                Sign Up
              </NavLink>
            </p>
            <button type="submit" className={css.submitBtn}>
              Log In
              <span></span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
