import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectVisibleFavouriteContacts } from '../../redux/contacts/selectors';
import css from './FavouriteContactsList.module.css';

const FavouriteContactsList = () => {
  const favouriteContacts = useSelector(selectVisibleFavouriteContacts);
  return (
    <ul className={css.list}>
      {favouriteContacts.length > 0 ? (
        favouriteContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className={css.noContactsYet}>
          You haven`t added any contacts to your favorites yet
        </p>
      )}
    </ul>
  );
};

export default FavouriteContactsList;
