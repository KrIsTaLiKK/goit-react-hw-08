import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContacts } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import css from './SearchBox.module.css';


const SearchBox = () => {
  const searchQueryId = useId();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();


  return (
    <div className={css.section}>
      <div className={css.searchWrap}>
        <label htmlFor={searchQueryId} className={css.label}>
          Find contacts
        </label>
        <input
          className={css.searchField}
          type="text"
          name="searchQuery"
          placeholder="Search by name or number..."
          id={searchQueryId}
          value={filterValue}
          onChange={e => dispatch(searchContacts(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
