import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// Імпорт асинхронних Thunk-дій fetchContacts, addContacts, deleteContacts з файлу 'operations'
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from 'redux/contacts/operations';

// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
const getActions = type =>
  isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// Початковий стан для slice contactsSlice
const initialState = { items: [], isLoading: false, error: null };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload; // Оновлення списку контактів
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // Додавання нового контакту на початок списку контактів
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1); // Видалення контакту зі списку контактів
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
