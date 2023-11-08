import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../LayOuts/MainLayouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";


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
        {
            path:'/availableFoods',
            element:<AvailableFoods></AvailableFoods>,
            loader:()=> fetch('http://localhost:5000/featured-foods')
        },
        {
            path:'/addFood',
            element:<PrivateRoute>
              <AddFood></AddFood>
            </PrivateRoute>
        },
        {
            path:'/manageFood',
            element:<PrivateRoute>
              <ManageFoods></ManageFoods>
            </PrivateRoute>,
             loader:()=> fetch(`http://localhost:5000/featured-foods`)
        },
        {
            path:'/foodDetails/:id',
            element:<PrivateRoute>
              <FoodDetails></FoodDetails>
            </PrivateRoute>,
            loader:()=> fetch(`http://localhost:5000/featured-foods`)
        },
        {
            path:'/requested-foods',
            element:<PrivateRoute>
             <MyFoodRequest></MyFoodRequest>
            </PrivateRoute>,
        },
      ]
    },
    {
      path:'*',
      element:<Page404></Page404>
    }
  ]);
  export default myCreatedRoutes;