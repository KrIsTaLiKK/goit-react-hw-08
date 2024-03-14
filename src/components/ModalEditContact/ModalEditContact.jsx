import { useDispatch } from 'react-redux';

import { changeContact } from '../../redux/contacts/operations';
import FormSample from '../FormSample/FormSample';

import ModalSample from '../ModalSample/ModalSample';
import toast from 'react-hot-toast';

const ModalEditContact = ({ isOpen, setIsOpen, id, name, number }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: name,
    number: number,
  };

  const handleSubmit = ({ name, number }) => {
    dispatch(changeContact({ name, number, id }))
      .unwrap()
      .then(({ name }) => toast.success(`You've updated the contact "${name}"`))
      .catch(() =>
        toast.error(
          'An error occurred while updating the contact. Please, try again!'
        )
      )
      .finally(setIsOpen(false));
  };

  return (
    <ModalSample isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <FormSample
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        btnSubmit="Edit contact"
      />
    </ModalSample>
  );
};

export default ModalEditContact;
