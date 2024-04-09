import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const Main = ({ children }) => <Container>{children}</Container>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
