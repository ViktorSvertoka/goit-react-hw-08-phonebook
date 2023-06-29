import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

// Імпортуємо необхідні функції для створення селектора та вибору фільтру зі стану.

export const selectLoading = state => state.contacts.isLoading;
// Селектор selectLoading вибирає прапор isLoading зі стану contacts.

export const selectError = state => state.contacts.error;
// Селектор selectError вибирає об'єкт помилки (якщо він є) зі стану contacts.

export const selectContacts = state => state.contacts.items;
// Селектор selectContacts вибирає масив контактів зі стану contacts.

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// Створюємо складний селектор selectVisibleContacts, який залежить від selectContacts та selectFilter.
// Використовуючи createSelectors, ми передаємо попередньо створені селектори та функцію, яка обчислює відфільтрований масив контактів.
// В результаті, selectVisibleContacts повертає масив контактів, які відповідають заданому фільтру.
// Фільтрація виконується шляхом порівняння імен контактів зі значенням фільтру, без урахування регістру.
