import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Profile from "./components/Profile";
import Status from "./components/Status";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
