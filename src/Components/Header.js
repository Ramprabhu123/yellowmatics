// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div style={{ position: 'fixed', top: '0', width: '100%', left: '0', zIndex: '1000' }}>
      <header>
        <h1>Yellowmatics</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Application</Link>
        <Link to="/salary">Salary</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
