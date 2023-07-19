/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ book, onDelete }) => {
  const { category, title, author } = book;

  const handleDelete = () => {
    onDelete(book.item_id);
  };
  return (
    <div className="row">
      <div className="cols-m1">
        <p>{category}</p>
        <h3>{title}</h3>
        <p className="remove-btn">{author}</p>
        <button className="remove-btn" type="button">
          Comments
        </button>
        <button className="remove-btn" type="button" onClick={handleDelete}>
          Remove
        </button>
        <button className="remove-btn" type="button">
          Edit
        </button>
      </div>
      <div className="cols-m2">
        <div className="circle"> </div>
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div className="cols-m3">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button className="btn" type="button">
          Update Progress
        </button>
      </div>
    </div>
  );
};
export default Book;
