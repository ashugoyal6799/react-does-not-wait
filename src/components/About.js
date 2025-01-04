import React from "react";
import { Outlet } from "react-router";

const About = (props) => {
  return (
    <>
      <h1>About Page</h1>
      <Outlet />
    </>
  );
};

export default About;
