import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлення базового URL для axios
// axios.defaults.baseURL = 'https://63d675bbe60d57436978ffcb.mockapi.io';

// Створення асинхронної Thunk-дії fetchContacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // Надсилання GET-запиту на '/contacts'
      const response = await axios.get('/contacts');
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Створення асинхронної Thunk-дії addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      // Надсилання POST-запиту на '/contacts' з даними { name, number }
      const response = await axios.post('/contacts', { name, number });
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Створення асинхронної Thunk-дії deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      // Надсилання DELETE-запиту на `/contacts/${contactId}`
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data; // Повернення отриманих даних
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
