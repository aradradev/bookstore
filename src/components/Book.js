/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({
  id, title, category, onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="row">
      <div className="cols-m1">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>Author</p>
        <button type="button">Comments</button>
        <button type="button" onClick={handleDelete}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div className="cols-m2">
        <div className="circle"> </div>
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div className="cols-m3">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};
export default Book;
