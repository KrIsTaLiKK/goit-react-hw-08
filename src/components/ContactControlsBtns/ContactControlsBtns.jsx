import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { MdOutlineFavorite } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';

import { selectFavouriteContacts } from '../../redux/contacts/selectors';
import { toggleFavouriteContacts } from '../../redux/contacts/slice';

import toast from 'react-hot-toast';
import clsx from 'clsx';
import css from './ContactControlsBtns.module.css';

const ContactControlsBtns = ({
  setIsOpenDeleteModal,
  setIsOpenEditModal,
  id,
  name,
  number,
}) => {
  const favouriteContacts = useSelector(selectFavouriteContacts);
  const [isFavourite, setIsFavourite] = useState(
    favouriteContacts.some(contact => contact.id === id)
  );

  const dispatch = useDispatch();

  const handleToggleFavourite = () => {
    setIsFavourite(!isFavourite);
    dispatch(toggleFavouriteContacts({ id, name, number }));

    isFavourite
      ? toast.success(`Contact '${name}' removed from favorites`)
      : toast.success(`Contact '${name}' was added to favourite`);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpenDeleteModal(true)}
        className={clsx(css.btn, css.btnDeletePosition)}
      >
        <RiDeleteBinLine size={25} className={css.iconDelete} />
      </button>
      <button
        type="button"
        className={clsx(css.btn, css.btnUpdatePosition)}
        onClick={() => setIsOpenEditModal(true)}
      >
        <CiEdit size={30} className={css.iconUpdate} />
      </button>
      <button
        className={clsx(css.btn, css.btnFavouritePosition)}
        onClick={handleToggleFavourite}
      >
        <MdOutlineFavorite
          size={30}
          className={isFavourite ? css.iconFavouriteRed : css.iconFavourite}
        />
      </button>
    </>
  );
};

export default ContactControlsBtns;
