import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function AddNewBook({ onAdd }) {
  const categories = ['Category', 'Economy', 'Action', 'Science Fiction'];

  const [category, setCategory] = useState('Category');
  const [title, setTitle] = useState('');
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAdd(title, category);
      setTitle('');
    }
  };

  return (
    <div className="form-input">
      <h1>Add new Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
