import { NavLink } from 'react-router-dom';
import Section from '../../components/Section/Section';
import HelmetComponent from '../../components/HelmetComponent/HelmetComponent';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section>
      <HelmetComponent>PhoneBook</HelmetComponent>
      <div className={css.wrap}>
        <h1 className={css.title}>
          Welcome to Phone<span className={css.accentWord}>Book</span> App!
        </h1>
        <div className={css.btnWrap}>
          <NavLink to="./login" className={css.btnLogin}>
            Log in
          </NavLink>
          <NavLink to="./register" className={css.btnSignUp}>
            Sign up
          </NavLink>
        </div>
      </div>
    </Section>
  );
};

export default HomePage;
