import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// Імпорт асинхронних Thunk-дій fetchContacts, addContacts, deleteContacts з файлу './operations'
import { fetchContacts, addContacts, deleteContacts } from './operations';

// Визначення масиву extraActions, що містить асинхронні Thunk-дії
// const extraActions = [fetchContacts, addContacts, deleteContacts];

// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
// const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
const getActions = type =>
  isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// Початковий стан для slice contactsSlice
const initialState = { items: [], isLoading: false, error: null };

// Створення slice для керування контактами
const contactsSlice = createSlice({
  name: 'contacts', // Унікальне ім'я для slice
  initialState, // Початковий стан slice
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // Обробка успішного виконання fetchContacts
        state.items = action.payload; // Оновлення списку контактів у стані
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        // Обробка успішного виконання addContacts
        state.items.unshift(action.payload); // Додавання нового контакту на початок списку контактів може
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        // Обробка успішного виконання deleteContacts
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1); // Видалення контакту зі списку контактів
      })
      .addMatcher(getActions('pending'), state => {
        // Обробка дій зі статусом 'pending' очікування
        state.isLoading = true; // Установка прапора isLoading true
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        // Обробка дій зі статусом 'rejected' відхилено
        state.isLoading = false; // Скидання прапора isLoading false
        state.error = action.payload; // Встановлення повідомлення про помилку
      })
      .addMatcher(getActions('fulfilled'), state => {
        // Обробка дій зі статусом 'fulfilled' виконано
        state.isLoading = false; // Скидання прапора isLoading false
        state.error = null; // Скидання повідомлення про помилку null
      }),
});

// Експорт дій addContact і deleteContact з slice contactsSlice
export const { addContact, deleteContact } = contactsSlice.actions;

// Експорт редуктора (reducer) contactsReducer з slice contactsSlice
export const contactsReducer = contactsSlice.reducer;
