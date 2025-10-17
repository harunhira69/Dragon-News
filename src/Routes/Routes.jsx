import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
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
]);
export default router