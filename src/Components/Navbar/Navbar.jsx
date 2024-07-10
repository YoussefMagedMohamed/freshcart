import React from "react";
import logo from "../../Assets/images/freshcart-logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img className="w-100" src={logo} alt="Fresh Cart" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2  mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"cart"}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"categories"}>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"brands"}>
                Brands
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className="fab fa-facebook me-2"></i>
              <i className="fab fa-twitter me-2"></i>
              <i className="fab fa-instagram me-2"></i>
              <i className="fab fa-youtube me-2"></i>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"register"}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link cursor-pointer">
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
