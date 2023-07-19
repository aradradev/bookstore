/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';
import {
  addBook,
  getBooksItems,
  removeBook,
  selectBooks,
  selectIsLoading,
} from '../redux/books/booksSlice';

const BooksContainer = () => {
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksItems());
  }, [dispatch]);

  const handleDeleteBook = (item_id) => {
    dispatch(removeBook(item_id));
  };

  const handleAddBook = (title, author, category) => {
    const newBook = {
      item_id: `item${Date.now()}`,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="booksContainer">
      <div className="rows">
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              book={book[0]}
              onDelete={handleDeleteBook}
            />
          ))}
        </div>
      </div>

      <AddNewBook onAdd={handleAddBook} />
    </div>
  );
};
export default BooksContainer;
