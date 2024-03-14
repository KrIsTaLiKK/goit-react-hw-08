import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.authList}>
      <li className={css.linkWrap}>
        <NavLink to="/register" className={css.link}>
          Sign Up
        </NavLink>
      </li>
      <li className={css.linkWrap}>
        <NavLink to="/login" className={clsx(css.link, css.loginLink)}>
          <BsPersonCircle className={css.icon} />
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
