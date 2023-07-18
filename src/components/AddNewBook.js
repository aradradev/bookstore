import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function AddNewBook({ onAdd }) {
  const categories = ['Category', 'Economy', 'Action', 'Science Fiction'];

  const [category, setCategory] = useState('Category');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      onAdd(title, author, category);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-input">
      <h3>Add new Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleCategory}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBook;
