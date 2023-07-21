/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-named-as-default */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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

  const handleDeleteBook = async (item_id) => {
    await dispatch(removeBook(item_id));
  };

  const handleAddBook = (title, author, category) => {
    const newBook = {
      item_id: `item${uuidv4()}`,
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
          {Object.keys(books).map((key) => {
            const bookDetails = { ...books[key][0] };
            bookDetails.item_id = key;
            return (
              <Book
                key={key}
                book={bookDetails}
                id={key}
                onDelete={handleDeleteBook}
              />
            );
          })}
        </div>
      </div>

      <AddNewBook onAdd={handleAddBook} />
    </div>
  );
};
export default BooksContainer;
