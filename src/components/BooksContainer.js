import React, { useState } from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddBook = (title, category) => {
    const newBook = {
      id: Date.now(),
      title,
      category,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="booksContainer">
      <div className="rows">
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
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
