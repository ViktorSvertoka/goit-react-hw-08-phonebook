import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Застосування middleware за допомогою getDefaultMiddleware,  який містить стандартні middleware, а також встановлює ігнорування деяких дій для redux-persist.
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Конфігурація для redux-persist, вказуємо ключ, зберігання та поля, які треба зберегти.
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Створення сховища Redux за допомогою configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для керування станом контактів
    filter: filterReducer, // Редюсер для керування станом фільтра
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// Створюємо persistor для збереження стану Redux у локальному сховищі.
export const persistor = persistStore(store);
