import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./componentes/Error";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
