import React, { useState, useEffect } from "react";

const Body = () => {
  const [var1, setVar1] = React.useState(0);

  function OnClickHandler() {
    setVar1(var1 + 1);
  }

  useEffect(() => {
    console.log("useEffect called1 as var1 has been changed", var1);
  }, [var1]);

  console.log("component rendered", var1);
  return (
    <>
      <h1>Body Component</h1>
      <p>This is the body of the page</p>
      <p>var1: {var1}</p>
      <button onClick={() => OnClickHandler()}>Increment var1</button>
    </>
  );
};

export default Body;
