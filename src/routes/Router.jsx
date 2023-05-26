import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/pages/error/Error";
import Home from "../components/pages/home/Home";
import Blog from "../components/pages/blogs/Blog";
import Login from "../components/pages/login_and_register/Login";
import Register from "../components/pages/login_and_register/Register";
import AddToys from "../components/pages/addToys/AddToys";
import AllToys from "../components/pages/allToys/AllToys";
import CategorysDetails from "../components/pages/categorysDetails/CategorysDetails";
import MyToys from "../components/pages/myToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Update from "../components/pages/updateToysInfo/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addToys',
        element:<PrivateRoute><AddToys /></PrivateRoute> 
      },
      {
        path: '/allToys',
        element: <AllToys />,
        loader: ()=> fetch('https://toy-palace-server.vercel.app/allToys')
      },
      {
        path: '/details/:id',
        element:<CategorysDetails />,
        loader: ({params}) => fetch(`https://toy-palace-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`https://toy-palace-server.vercel.app/allToys/${params.id}`)
      }
    ],
  },
]);

export default router;
