import React from 'react';
import { Link } from 'react-router-dom';

// sass file
import "./Navbar.scss";

const Navbar = () => {
    return (
      
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-custom">
          <div className="container-fluid">
            <Link
              className="navbar-brand fw-bolder fs-3"
              to="/"
              title="HomePage"
            >
              Mahsa Irankhah
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    aria-current="page"
                    to="/"
                    title="Home Page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/about"
                    title="About Me"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/work"
                    title="my projects preview"
                  >
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/"
                    title="My Contact Info"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
    );
};

export default Navbar;