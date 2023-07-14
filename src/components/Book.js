/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Book = ({ title, onDelete }) => (
  <div>
    <h3>{title}</h3>
    <button onClick={onDelete}>Remove</button>
  </div>
);
export default Book;
