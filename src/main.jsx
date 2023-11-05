import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MyAuthContext from './authProvider/MyAuthContext';
import MainLayouts from './Components/LayOuts/MainLayouts/MainLayouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthContext>
     <RouterProvider router={router} />
    </MyAuthContext>
  </React.StrictMode>,
)
