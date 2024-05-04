import React, { Component } from 'react';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex justify-content-between">
        <a className="navbar-brand" href="www.airbnb.mx">
          <img src="src/images/Logo.png" alt="Logo" width="135 px" />
        </a>
            <a className="nav-link" href="">Estancias</a>
            <a className="nav-link" href="#">Experiencias</a>
            <a className="nav-link" href="#">Experiencia en linea</a>
            <a className="nav-link" href="#">Pon tu casa en Airbnb</a>
        <a className="navbar-brand" href="#">
          <img src="/path/to/image.png" alt="Image" />
        </a>

        {/* Dropdown menu */}
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
