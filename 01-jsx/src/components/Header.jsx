import React from "react";
import PropTypes from "prop-types";

const Header = ({ mybrand }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

      <a className="navbar-brand" href="#">
        {mybrand}
      </a>

      <div className="collapse navbar-collapse">

        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Leads</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>

        </ul>

      </div>

    </nav>
  );
};

Header.defaultProps = {
  mybrand: "My App"
};

Header.propTypes = {
  mybrand: PropTypes.string.isRequired
};

export default Header;