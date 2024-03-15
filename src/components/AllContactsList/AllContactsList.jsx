import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectAllVisibleContacts } from '../../redux/contacts/selectors';

import css from './AllContactsList.module.css';

const AllContactsList = () => {
  const visibleContacts = useSelector(selectAllVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className={css.noContactsYet}>
          There are no contacts in your PhoneBook with this name.
        </p>
      )}
    </ul>
  );
};

export default AllContactsList;
