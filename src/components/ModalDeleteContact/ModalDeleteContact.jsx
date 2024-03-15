import { useDispatch } from 'react-redux';
import ModalSample from '../ModalSample/ModalSample';
import { deleteContact } from '../../redux/contacts/operations';

import { RiDeleteBin6Fill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import css from './ModalDeleteContact.module.css';
import { useEffect } from 'react';

const ModalDeleteContact = ({ isOpen, setIsOpen, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(({ name }) => toast.success(`You've deleted the contact "${name}"`))
      .catch(() =>
        toast.error(
          'An error occurred while deleting the contact. Please, try again!'
        )
      )
      .finally(() => {
        setIsOpen(false);
      });
  };

  return (
    <ModalSample isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className={css.wrap}>
        <RiDeleteBin6Fill size={60} className={css.icon} />
        <p className={css.text}>
          Do you really want to delete this contact? If you press
          <span className={css.accentWord}> &quot;Confirm&quot;</span>, the
          contact will be permanently deleted from your PhoneBook.
        </p>
        <div className={css.btnsWrap}>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={clsx(css.btn, css.btnCancel)}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDeleteContact}
            className={clsx(css.btn, css.btnConfirm)}
          >
            Confirm
          </button>
        </div>
      </div>
    </ModalSample>
  );
};

export default ModalDeleteContact;
