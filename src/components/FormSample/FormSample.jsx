import { useId } from 'react';

import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './FormSample.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Required field!'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be at least 10 digits')
    .max(15, 'Must not exceed 15 digits')
    .required('Required field!'),
});

const FormSample = ({ initialValues, handleSubmit, btnSubmit }) => {
  const userId = useId();
  const numderId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldGroup}>
          <Field
            name="name"
            id={userId}
            className={css.formInput}
            placeholder=""
          ></Field>
          <label htmlFor={userId} className={css.label}>
            Name
          </label>

          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.fieldGroup}>
          <Field
            name="number"
            id={numderId}
            className={css.formInput}
            placeholder=""
          ></Field>
          <label htmlFor={numderId} className={css.label}>
            Number
          </label>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submitBtn} type="submit">
          {btnSubmit}
        </button>
      </Form>
    </Formik>
  );
};

export default FormSample;
