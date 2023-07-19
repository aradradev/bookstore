/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};
const itemId = 'SERz0T6MOlfncfi0umcc';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${itemId}/books`;

export const getBooksItems = createAsyncThunk(
  'books/getBooksItems',
  async () => {
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const res = await axios.post(`${url}`, book, {
      'Content-Type': 'application/json',
    });
    return res.data;
  } catch (error) {
    return error;
  }
});

export const selectBooks = (state) => state.books.books;

export const selectIsLoading = (state) => state.books.isLoading;

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (item_id) => {
    try {
      await axios.delete(`${url}/${item_id}`);
      return item_id;
    } catch (error) {
      return error;
    }
  },
);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooksItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooksItems.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload || [];
        if (Array.isArray(data)) {
          state.books = data;
        } else if (typeof data === 'object') {
          state.books = Object.values(data);
        } else {
          state.books = [];
        }
      })
      .addCase(getBooksItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
      });
  },
});
// export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
