import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllVisibleContacts,
  selectContacts,
} from '../../redux/contacts/selectors';

import SwitchContacts from '../SwitchContacts/SwitchContacts';
import AllContactsList from '../AllContactsList/AllContactsList';
import FavouriteContactsList from '../FavouriteContactsList/FavouriteContactsList';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectAllVisibleContacts);
  const contacts = useSelector(selectContacts);

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
      {contacts.length !== 0 ? (
        <div className={css.listWrap}>
          {allContacts ? <AllContactsList /> : <FavouriteContactsList />}
        </div>
      ) : (
        <div className={css.noContactsWrap}>
          <p className={css.noContactsYet}>
            There are no contacts in your PhoneBook yet. Please, use the form
            above to add your first contact!
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
