import React from 'react';
import { Link } from 'react-router-dom';
import User from '../icons/icons';

const Navigation = () => (
  <>
    <nav className="nav-center">
      <h3 className="title">Bookstore CMS</h3>
      <ul className="listItems">
        <li>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
            Books
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/categories"
          >
            Categories
          </Link>
        </li>
      </ul>
      <div>
        <User />
      </div>
    </nav>
  </>
);
export default Navigation;
