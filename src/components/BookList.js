/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div>
    <h2>Book List</h2>
    {books.map((book, index) => (
      <Book
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        title={book.title}
        onDelete={() => onDelete(index)}
      />
    ))}
  </div>
);
export default BookList;
