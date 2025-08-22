import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Public from "./Public";
import Protected from "./Protected";

const router = createBrowserRouter([
  { element: <Public />, children: [] },
  { element: <Protected />, children: [] },
  { path: "*", element: <div>404</div> }, // TODO: Create a 404 page
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
