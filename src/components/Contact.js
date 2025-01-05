import React from "react";
import { useEffect } from "react";

const Contact = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timeout Triggered!");
    }, 1000);

    // so when this component unmount we should remove setInterval
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Contact Page</h1>
    </>
  );
};

export default Contact;
