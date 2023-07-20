/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Button, CircularProgress } from '@mui/joy';

const Book = ({ id, book, onDelete }) => {
  const {
    category, title, author,
  } = book;
  const progress = [
    {
      value: Math.floor(Math.random() * 100) + 1 || 64,
    },
  ];

  const currentChapter = [
    {
      value: Math.floor(Math.random() * 30) + 1 || 'Chapter 17',
    },
  ];

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
          value={progress[0].value}
          sx={{
            '--CircularProgress-size': '4.6rem',
          }}
        />
        <div>
          <p
            style={{ fontWeight: 'bold', color: '#000' }}
          >
            {`${progress[0].value}%`}
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="cols-m3">
        <p style={{ fontWeight: 'bold', color: '#000' }}>Current Chapter</p>
        <p>{`Chapter ${currentChapter[0].value}`}</p>
        <Button variant="solid">Update progress</Button>
      </div>
    </div>
  );
};
export default Book;
