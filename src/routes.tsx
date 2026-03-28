import { createBrowserRouter } from "react-router";
import { HomePage } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
