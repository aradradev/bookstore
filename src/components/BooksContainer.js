import React, { useState } from 'react';
import BookList from './BookList';

const BooksContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('Action');
  const [books, setBooks] = useState([
    { title: 'Book 1', category: 'Action' },
    { title: 'Book 2', category: 'Adventure' },
    { title: 'Book 3', category: 'Mystery' },
  ]);
  const [title, setTitle] = useState('');
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleAddBook = () => {
    if (title.trim()) {
      const newBook = {
        title: title.trim(),
        category: selectedCategory,
      };
      setBooks([...books, newBook]);
      setTitle('');
    }
  };
  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Books Container</h2>
      <BookList books={books} onDelete={handleDeleteBook} />

      <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <button type="button" onChange={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};
export default BooksContainer;
