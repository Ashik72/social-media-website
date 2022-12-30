import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ProfileLayout from "../layout/ProfileLayout/ProfileLayout";
import PostDetails from "../pages/Home/AllPosts/PostDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile/Profile";
import About from "../pages/Profile/ProfileInfo/About/About";
import Friends from "../pages/Profile/ProfileInfo/Friends/Friends";
import Media from "../pages/Profile/ProfileInfo/Media/Media";
import Photos from "../pages/Profile/ProfileInfo/Photos/Photos";
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
        element: <ProfileLayout></ProfileLayout>,
        children: [
          {
            path: "/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/profile/media",
            element: <Media></Media>,
          },
          {
            path: "/profile/friends",
            element: <Friends></Friends>,
          },
          {
            path: "/profile/photos",
            element: <Photos></Photos>,
          },
          {
            path: "/profile/about",
            element: <About></About>,
          },
        ],
      },
      {
        path: "/postdetails/:id",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
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
