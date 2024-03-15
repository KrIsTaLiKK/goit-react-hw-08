import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  addContact,
  deleteContact,
  fetchContacts,
  changeContact,
} from './operations';
import { logOut } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const removeContactFromList = (contacts, idToRemove) => {
  return contacts.filter(contact => contact.id !== idToRemove);
};

const changeContactInList = (contacts, changeContact) => {
  return contacts.map(contact =>
    contact.id === changeContact.id ? changeContact : contact
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    favouriteContacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavouriteContacts(state, action) {
      const isInFavourites = state.favouriteContacts.some(
        contact => contact.id === action.payload.id
      );

      if (isInFavourites) {
        const updatedFavourites = state.favouriteContacts.filter(
          contact => contact.id !== action.payload.id
        );

        state.favouriteContacts = updatedFavourites;
      } else {
        const favouriteContact = state.items.find(
          contact => contact.id === action.payload.id
        );
        state.favouriteContacts.push(favouriteContact);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = removeContactFromList(state.items, action.payload.id);
        state.favouriteContacts = removeContactFromList(
          state.favouriteContacts,
          action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(changeContact.fulfilled, (state, action) => {
        const changedContact = action.payload;
        state.items = changeContactInList(state.items, changedContact);
        state.favouriteContacts = changeContactInList(
          state.favouriteContacts,
          changedContact
        );
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

const favouriteContactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['favouriteContacts'],
};

export const contactsReducer = persistReducer(
  favouriteContactsPersistConfig,
  contactsSlice.reducer
);

export const { toggleFavouriteContacts } = contactsSlice.actions;
