import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Instagram</div>
      <div className="search-bar">
        {/* Search bar implementation */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;