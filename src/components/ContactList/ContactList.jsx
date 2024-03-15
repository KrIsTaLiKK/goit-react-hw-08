import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectVisibleFavouriteContacts,
  selectAllVisibleContacts,
} from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import SwitchContacts from '../SwitchContacts/SwitchContacts';

import css from './ContactList.module.css';
import AllContactsList from '../AllContactsList/AllContactsList';
import FavouriteContactsList from '../FavouriteContactsList/FavouriteContactsList';

export const ContactList = () => {
  const visibleContacts = useSelector(selectAllVisibleContacts);

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
        {allContacts ? <AllContactsList /> : <FavouriteContactsList />}
      </div>
    </div>
  );
};

export default ContactList;
