import clsx from 'clsx';
import css from './SwitchContacts.module.css';

const SwitchContacts = ({ allContacts, setAllContacts }) => {
  return (
    <div className={css.switchBtnWrap}>
      <button
        className={clsx(css.switchBtn, {
          [css.isActiveAll]: allContacts,
        })}
        onClick={() => setAllContacts(true)}
      >
        All
      </button>
      <button
        className={clsx(css.switchBtn, {
          [css.isActiveAll]: !allContacts,
        })}
        onClick={() => setAllContacts(false)}
      >
        Favourite
      </button>
    </div>
  );
};

export default SwitchContacts;
