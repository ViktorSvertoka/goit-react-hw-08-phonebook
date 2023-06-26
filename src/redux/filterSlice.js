import { createSlice } from '@reduxjs/toolkit';

// Створення slice для фільтра
export const filterSlice = createSlice({
  name: 'filter', // Унікальне ім'я для slice
  initialState: '', // Початковий стан фільтра
  reducers: {
    // Визначення редуктора changeFilter, який змінюватиме стан фільтра на основі переданої дії action
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Експорт дії action changeFilter з slice filterSlice
export const { changeFilter } = filterSlice.actions;

// Експорт редуктора reducer filterReducer з slice filterSlice
export const filterReducer = filterSlice.reducer;
