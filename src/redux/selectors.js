import { createSelector } from '@reduxjs/toolkit';

// Функція selectIsLoading приймає об'єкт стану state і повертає значення властивості isLoading з об'єкта стану contacts.
export const selectIsLoading = state => state.contacts.isLoading;

// Функція selectError приймає об'єкт стану state і повертає значення якості error з об'єкта стану contacts.
export const selectError = state => state.contacts.error;

// Функція selectContacts приймає об'єкт стану state і повертає значення властивості items з об'єкта стану contacts.
export const selectContacts = state => state.contacts.items;

// Функція selectFilter приймає об'єкт стану state та повертає значення властивості filter з об'єкта стану.
export const selectFilter = state => state.filter;

// Функція selectVisibleContacts використовує функцію createSelector для створення селектора, який залежить від двох інших селекторів: selectContacts і selectFilter.
// Селектор selectVisibleContacts повертає відфільтрований масив контактів, де ім'я контакту contact.name містить рядок фільтра filter.
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
