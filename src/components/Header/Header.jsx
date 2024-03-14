import Container from '../Container/Container';
import css from './Header.module.css';

const Header = ({ children }) => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>{children}</div>
      </Container>
    </header>
  );
};

export default Header;
