import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import About from "./routes/about";
import Policies from "./routes/policies";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "policies",
    element: <Policies/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);