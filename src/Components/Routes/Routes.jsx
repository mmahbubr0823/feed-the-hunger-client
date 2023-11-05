import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";


const myCreatedRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/featured-foods')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<Registration></Registration>
        },
      ]
    },
    {
      path:'*',
      element:<Page404></Page404>
    }
  ]);
  export default myCreatedRoutes;