import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./componentes/Error";
import About from "./componentes/About";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
