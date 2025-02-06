import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import Root, { authorizeAPI } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: authorizeAPI,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  { path: "/about", element: <p>About Us</p> },
]);
