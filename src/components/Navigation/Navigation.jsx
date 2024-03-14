import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks';
import { selectContacts } from '../../redux/contacts/selectors';
import GridNav from '../GridNav/GridNav';

import clsx from 'clsx';
import css from './Navigation.module.css';

const activeClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const contacts = useSelector(selectContacts);

  return (
    <GridNav>
      <li>
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts" className={activeClass}>
            Contacts{' '}
            <span className={css.numberOfContacts}>({contacts.length})</span>
          </NavLink>
        </li>
      )}
    </GridNav>
  );
};

export default Navigation;
