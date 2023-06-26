import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Створення сховища Redux за допомогою configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для керування станом контактів
    filter: filterReducer, // Редюсер для керування станом фільтра
  },

  // Застосування middleware за допомогою getDefaultMiddleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
