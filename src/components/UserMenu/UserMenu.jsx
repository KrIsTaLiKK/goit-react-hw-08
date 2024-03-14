import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import { LuLogOut } from 'react-icons/lu';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();

  return (
    <div className={css.wrap}>
      <p className={css.text}>Welcome, {user.name}!</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        <LuLogOut className={css.icon} size={20} />

        <span className={css.textBtn}>Log Out</span>
      </button>
    </div>
  );
};

export default UserMenu;
