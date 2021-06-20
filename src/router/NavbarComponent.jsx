import React from 'react';
import {NavLink} from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <header id="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-3" href="#home">
              <span className="text-primary">COVID</span>.IN
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse justicy-content-center navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mx-auto navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/SearchData">
                    Search Data
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <button className="btn btn-outline-light fw-bold  rounded-button">GitHub</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavbarComponent;
