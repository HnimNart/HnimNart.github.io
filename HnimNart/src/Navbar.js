import React from "react";
import logo from './images/potato.jpeg' // relative path to image 


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Company Logo" width="50" height="50px" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home 
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#/BxDiff">
                BxDiff
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#/Simulator">
                Simulator
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


