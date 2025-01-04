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
        /* this is parent for profile, status,,. 
        so in the outlet one of these component will render based on the route*/

        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "status",
            element: <Status />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
