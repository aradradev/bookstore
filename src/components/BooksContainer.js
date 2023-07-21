import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BooksContainer = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
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

  return (
    <div className="booksContainer">
      <div className="rows">
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
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
