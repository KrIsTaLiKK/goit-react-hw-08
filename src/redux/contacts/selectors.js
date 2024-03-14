import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';
import { searchFuse } from '../../helpers';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFavouriteContacts = state =>
  state.contacts.favouriteContacts;

export const selectAllVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const result = searchFuse(contacts, filter);

    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return filter ? result.map(result => result.item) : sortedContacts;
  }
);

export const selectVisibleFavouriteContacts = createSelector(
  [selectFavouriteContacts, selectFilter],
  (favouriteContacts, filter) => {
    const result = searchFuse(favouriteContacts, filter);

    const sortedContacts = [...favouriteContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return filter ? result.map(result => result.item) : sortedContacts;
  }
);
