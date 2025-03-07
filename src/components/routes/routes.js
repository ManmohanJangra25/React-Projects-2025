import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  { path: "/about", element: <p>About Us</p> },
]);
