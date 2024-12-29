import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./componentes/Header";
import Body from "./componentes/Body";
import Footer from "./componentes/Footer";
import Error from "./componentes/Error";
import About from "./componentes/About";
import Contact from "./componentes/Contact";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
