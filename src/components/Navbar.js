import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarTogglerDemo01"
          >
            <a class="navbar-brand" href="/">
              iNoteBook
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
