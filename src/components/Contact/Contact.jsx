import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavouriteContacts } from '../../redux/contacts/selectors';
import { toggleFavouriteContacts } from '../../redux/contacts/slice';

import ModalEditContact from '../ModalEditContact/ModalEditContact';
import ModalDeleteContact from '../ModalDeleteContact/ModalDeleteContact';

import { HiMiniPhone } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';

import { getRandomHexColor } from '../../helpers';

import clsx from 'clsx';
import css from './Contact.module.css';
import toast from 'react-hot-toast';
import ContactControlsBtns from '../ContactControlsBtns/ContactControlsBtns';

const Contact = ({ contact: { name, number, id } }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  // const dispatch = useDispatch();
  // const favouriteContacts = useSelector(selectFavouriteContacts);
  // const [isFavourite, setIsFavourite] = useState(
  //   favouriteContacts.some(contact => contact.id === id)
  // );

  const iconColor = useMemo(() => getRandomHexColor(), []);

  return (
    <div className={css.cardWrap}>
      <div className={css.iconUserWrap}>
        <FaUser
          className={css.iconUser}
          size="60"
          style={{ color: `${iconColor}` }}
        />
      </div>

      <ul className={css.contactInfoList}>
        <li>
          <span className={clsx(css.text, css.name)}>{name}</span>
        </li>
        <li className={css.phone}>
          <HiMiniPhone />
          <span className={css.text}>{number}</span>
        </li>
      </ul>

      <ContactControlsBtns
        setIsOpenDeleteModal={setIsOpenDeleteModal}
        setIsOpenEditModal={setIsOpenEditModal}
        id={id}
        name={name}
        number={number}
      />

      <div>
        <ModalEditContact
          isOpen={isOpenEditModal}
          setIsOpen={setIsOpenEditModal}
          id={id}
          name={name}
          number={number}
        />
        <ModalDeleteContact
          isOpen={isOpenDeleteModal}
          setIsOpen={setIsOpenDeleteModal}
          id={id}
        ></ModalDeleteContact>
      </div>
    </div>
  );
};

export default Contact;
