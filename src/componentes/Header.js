import React from "react";
import { Link } from "react-router";
const Header = (props) => {
  return (
    <>
      <h1>Header Component 1</h1>
      {/* <a href="/about">About Page</a> */}
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </>
  );
};

export default Header;
