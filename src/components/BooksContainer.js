import React from 'react';
import AddNewBook from './AddNewBook';

const BooksContainer = () => (
  <div className="booksContainer">
    <div className="rows">
      <div className="row">
        <div className="cols-m1">
          <p>Action</p>
          <h3>The Hunger Game</h3>
          <p>Author</p>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>

    <AddNewBook />
  </div>
);
export default BooksContainer;
