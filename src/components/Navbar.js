import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a class="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              {props.about}
            </Link>
          </li>
        </ul>
        <button
          class={`btn btn-${props.mode} my-2 my-sm-0`}
          onClick={props.toggleMode}
          type="submit"
        >
          {props.btntext}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title here",
  about: "About",
};
