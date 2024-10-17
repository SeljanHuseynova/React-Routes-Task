import React from 'react';
import { Link } from 'react-router-dom';
import garboIcon from '../assets/style/images/GarboLogoGreen.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar custom-navbar  navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to='/'><img src={garboIcon} alt="garbo-icon" width={100}
          height={100} /></Link>
        <Link className="navbar-brand" to="/">Gabro</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
