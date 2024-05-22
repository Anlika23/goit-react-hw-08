import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { logOut } from '../auth/operations';

import { addContact, deleteContact, fetchContacts } from './operations';
import { selectNameFilter } from '../filters/selectors';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => 
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
    
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      }),
});

export const selectContact = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      contact.number.includes(nameFilter)
    );
  }
);

export const contactsReducer = contactSlice.reducer;
