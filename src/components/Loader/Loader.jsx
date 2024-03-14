import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <DNA visible={true} />
    </div>
  );
};

export default Loader;
