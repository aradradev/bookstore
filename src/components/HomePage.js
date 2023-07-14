import React, { useState } from 'react';
import Navigation from './Navigation';
import BookList from './Book';
import BooksContainer from './BooksContainer';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  // const handleAddBook = (title) => {
  //   setBooks([...books, { title }]);
  // };
  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };
  return (
    <div>
      <Navigation />
      <BookList books={books} onDelete={handleDeleteBook} />
      <BooksContainer />
    </div>
  );
};
export default HomePage;
