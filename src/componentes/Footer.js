import React from "react";
import Contact from "./Contact";
import { Link } from "react-router";

const Footer = (props) => {
  return (
    <>
      <h1>Footer Component</h1>
      <Link to="/contact">Contact Page</Link>
    </>
  );
};

export default Footer;
