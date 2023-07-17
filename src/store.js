import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './redux/categories/categoriesSlice';

import booksReducer from './redux/books/booksSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
  },
});

export default store;
