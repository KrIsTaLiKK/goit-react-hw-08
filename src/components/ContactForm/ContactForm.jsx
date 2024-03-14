import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import FormSample from '../FormSample/FormSample';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, actions) => {
    const repeatedContact = contacts.some(
      ({ name: userName }) => userName.toLowerCase() === name.toLowerCase()
    );

    if (repeatedContact) {
      actions.resetForm();
      return toast.error(`Contact is already in contacts`);
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(({ name }) => {
        toast.success(`You've added the contact "${name}"`);
      })
      .catch(() =>
        toast.error(
          'An error occurred while adding the contact. Please, try again!'
        )
      )
      .finally(actions.resetForm());
  };

  return (
    <FormSample
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      btnSubmit="Add contact"
    />
  );
};

export default ContactForm;
