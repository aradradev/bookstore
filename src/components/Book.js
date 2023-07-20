/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Button, CircularProgress } from '@mui/joy';

const Book = ({ id, book, onDelete }) => {
  const {
    category, title, author,
  } = book;
  const progress = book.progress || 64;
  const currentChapter = book.currentChapter || 'Chapter 17';

  const handleDelete = (e) => {
    const { id } = e.target.dataset;
    onDelete(id);
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
        <button
          data-id={id}
          className="remove-btn"
          type="button"
          onClick={handleDelete}
        >
          Remove
        </button>
        <button className="remove-btn" type="button">
          Edit
        </button>
      </div>
      <div className="cols-m2">
        <CircularProgress
          determinate
          value={progress}
          sx={{
            '--CircularProgress-size': '4.6rem',
          }}
        />
        <div>
          <p style={{ fontWeight: 'bold' }}>{`${progress}%`}</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="cols-m3">
        <p style={{ fontWeight: 'bold' }}>Current Chapter</p>
        <p>{currentChapter}</p>
        <Button variant="solid">Update progress</Button>
      </div>
    </div>
  );
};
export default Book;
