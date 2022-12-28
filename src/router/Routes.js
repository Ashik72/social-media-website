import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile/Profile";
import Register from "../pages/Register/Register";
// import PrivateRouter from "./PrivateRouter";
// import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          // <PrivateRoute>

          <Home></Home>

          // </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        // children: [
        //   {
        //     path: "/profile",
        //     element: <Profile></Profile>,
        //   },
        // ],
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
