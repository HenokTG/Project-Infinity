import React from "react";
import { Link } from "react-router-dom";

import logo from "../pics/logo.png";

const Navbar = () => {
  
  return (
    <nav className="navbar-expand-sm  navbar-dark text-light fixed-top">
      <section className="nav-center d-flex justify-content-around">
        <div className="nav-header">
          <Link to="/welcome">
            <img src={logo} alt="code addict logo" className="logo mx-5" />
          </Link>
            <h3>Shopping Cart</h3>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
