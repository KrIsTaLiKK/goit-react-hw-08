import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectVisibleFavouriteContacts,
  selectAllVisibleContacts,
} from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import SwitchContacts from '../SwitchContacts/SwitchContacts';

import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectAllVisibleContacts);
  const favouriteContacts = useSelector(selectVisibleFavouriteContacts);
  const [allContacts, setAllContacts] = useState(true);

  const wordContacts = visibleContacts.length === 1 ? 'contact' : 'contacts';

  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.totalContactsWrap}>
        <p className={css.totalContacts}>
          You have {visibleContacts.length} {wordContacts}
        </p>
      </div>
      <SwitchContacts
        allContacts={allContacts}
        setAllContacts={setAllContacts}
      />
      <div className={css.listWrap}>
        {allContacts ? (
          <ul className={css.list}>
            {visibleContacts.length > 0 ? (
              visibleContacts.map(contact => (
                <li key={contact.id} className={css.item}>
                  <Contact contact={contact} />
                </li>
              ))
            ) : (
              <p className={css.noContactsYet}>
                There are no contacts in your PhoneBook yet. Please, use the
                form above to add your first contact!
              </p>
            )}
          </ul>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ContactList;
