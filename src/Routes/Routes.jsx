import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "../Component/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    errorElement:<h3>404 Not Found</h3>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
              path:'/category/:id',
              element:<CategoryNews></CategoryNews>,
              loader:()=>fetch('/news.json')
      }
    ]
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  
    
  },
  {
    path:'/news-details/:id',
   element:<PrivateRoutes>
    <NewsDetails></NewsDetails>
   </PrivateRoutes>,
   loader:()=>fetch('/news.json')
  }
]);
export default router