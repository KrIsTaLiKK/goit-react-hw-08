import css from './GridNav.module.css';

const GridNav = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default GridNav;
