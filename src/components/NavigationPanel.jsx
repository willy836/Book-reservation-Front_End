import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationPanel = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="nav-section">
      <nav>
        <div className="header">
          <p className="ms-1">Logo</p>
          <button
            type="button"
            className={`hamburger ${showLinks ? 'active' : ''}`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        {showLinks && (
          <div className="nav-links">
            <Link to="/tables">Tables</Link>
            <Link to="/AddTable">Add Table</Link>
            <Link to="/reservation-form">Make Reservation</Link>
            <Link to="/Myresercvations">My Reservations</Link>
            <Link to="/">Login</Link>
            <Link to="/homepage" onClick={() => setShowLinks(false)}>
              Home
            </Link>
          </div>
        )}
      </nav>
      <div className="sidenav">
        <h4>Logo Name</h4>
        <div className="sidenav-links" />
        <Link to="/homepage" className="sidenav-link">
          Tables
        </Link>
        <Link to="/AddTable" className="sidenav-link">
          Add Table
        </Link>
        <Link to="/reservation-form" className="sidenav-link">
          Make Reservation
        </Link>
        <Link to="/Myresercvations" className="sidenav-link">
          My Reservations
        </Link>
        <Link to="/" className="sidenav-link">
          Login
        </Link>
      </div>
    </section>
  );
};

export default NavigationPanel;
