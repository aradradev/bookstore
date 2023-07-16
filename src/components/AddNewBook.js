import React, { useState } from 'react';

function AddNewBook() {
  const categories = ['Category', 'Economy', 'Action', 'Science Fiction'];
  const [category, setCategory] = useState('Category');
  const [title, setTitle] = useState('');
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    const newBook = e.target.value;
    setTitle(newBook);
  };

  return (
    <div className="form-input">
      <h1>Add new Book</h1>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={handleSubmit}
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
      <button type="button" onSubmit={(e) => setTitle(e.target.value)}>
        Add Book
      </button>
    </div>
  );
}

export default AddNewBook;
