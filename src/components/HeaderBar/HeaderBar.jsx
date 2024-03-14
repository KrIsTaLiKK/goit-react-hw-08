import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import AuthNav from '../AuthNav/AuthNav';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { GiVibratingSmartphone } from 'react-icons/gi';
import css from './HeaderBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavLink to="/" className={css.logo}>
        <GiVibratingSmartphone size={30} className={css.logoIcon} />
        <span>PhoneBook</span>
      </NavLink>

      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </Header>
  );
};

export default AppBar;
