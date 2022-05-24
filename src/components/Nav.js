import React from "react";
import { Navbar } from "react-bootstrap";
// import {NavLink} from "react-router-dom";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <a
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >About</a>
          </li>
          <li className="nav-item">
            <a
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >Portfolio</a>
          </li>
          <li className="nav-item">
            <a
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            >Contact</a>
          </li>
          <li className="nav-item">
            <a 
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a>
          </li>
        </ul>
    </div>
  );
}

export default Nav;