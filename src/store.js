import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './features/categories/categoriesSlice';
import booksSlice from './features/books/booksSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    books: booksSlice,
  },
});

export default store;
