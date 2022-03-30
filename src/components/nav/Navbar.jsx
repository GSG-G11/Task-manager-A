import React from 'react';
import './nav.css';

const Navbar = ({ toggleAdd, added }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h2>Task Manager</h2>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <h3 className="nav-link" onClick={toggleAdd}>
                Add Task
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
