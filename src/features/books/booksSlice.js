import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
