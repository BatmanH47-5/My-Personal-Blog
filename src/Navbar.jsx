// Navbar.jsx
import React from 'react';
import './styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container-lg">
        <a className="navbar-brand fw-bold" href="#">Jane Doe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-lg-none" href="#contact">Contact</a>
            </li>
          </ul>
          <a className="btn btn-outline-dark d-none d-lg-block" href="#contact">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
