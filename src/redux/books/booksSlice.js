/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const newBook = {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
        progress: Math.floor(Math.random() * 100) + 1,
        currentChapter: `Chapter ${Math.floor(Math.random() * 30) + 1}`,
      };
      const res = await axios.post(`${url}`, newBook, {
        'Content-Type': 'application/json',
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const selectBooks = (state) => state.books.books;

export const selectIsLoading = (state) => state.books.isLoading;

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (item_id, thunkAPI) => {
    try {
      await axios.delete(`${url}/${item_id}`);
      return item_id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBooksItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooksItems.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload || {};
        state.books = data;
      })
      .addCase(getBooksItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const newBook = action.payload;
        const newBookEntry = {
          [newBook.item_id]: [newBook],
        };

        state.books = { ...state.books, ...newBookEntry };
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        delete state.books[action.meta.arg];
      });
  },
});

export default booksSlice.reducer;
