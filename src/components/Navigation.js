import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navLinks">
    <h3 className="title">Bookstore CMS</h3>
    <ul className="listItems">
      <li>
        <Link style={{ textDecoration: 'none', color: '#121212' }} to="/">
          Books
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: 'none', color: '#121212' }}
          to="/categories"
        >
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
