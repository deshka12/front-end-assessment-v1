import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ name, pathName, navigateTo }) => (
  <>
    <div className="d-flex align-items-center justify-content-between">
      <h2 className="h3">{name}</h2>
      <Link to={pathName}>{navigateTo}</Link>
    </div>
    <hr />
  </>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
};

export default Header;
