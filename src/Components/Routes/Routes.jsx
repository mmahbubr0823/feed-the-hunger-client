import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


const myCreatedRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
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
  ]);
  export default myCreatedRoutes;