import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
         
// props are like arguments can only be changed from the parent component
// default props are passed by destructuring
export default function Navbar(props) 
{
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode === "light" ? "light" : "dark"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> 
            </form> */}
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="blueDarkSwitch" onClick={props.toggleBlueDarkMode} />
            <label className="form-check-label mx-2" htmlFor="blueDarkSwitch"> Dark Mode</label>
            </div>

            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="greenDarkSwitch" onClick={props.toggleGreenDarkMode} />
            <label className="form-check-label" htmlFor="greenDarkSwitch">Green Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// only to remember and to not pass any array or object by mistake
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
