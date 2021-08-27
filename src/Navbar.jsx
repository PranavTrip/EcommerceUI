import React, { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <a class="navbar-brand" href="#">
            EasyPay
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setDisplay(!display)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${display ? "show" : ""}`}>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-style" type="submit">
                Sign Up
              </button>
              <button class="btn btn-style btn-style-border" type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
