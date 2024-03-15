import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import Section from '../../components/Section/Section';
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent';

import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <HelmetComponent>Contacts</HelmetComponent>
      <div className={css.container}>
        <h1 className={css.mainTitle}>
          Add new contact in your Phone
          <span className={css.accentWord}>Book</span>
        </h1>
        <ContactForm />

        <SearchBox />
        {error && <b>Oops! Something went wrong. Please, reloading page.</b>}
        {loading && !error && <Loader />}
        {!loading && !error && <ContactList />}
      </div>
    </Section>
  );
};

export default ContactsPage;
