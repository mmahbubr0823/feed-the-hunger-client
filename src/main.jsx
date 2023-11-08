import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,
} from "react-router-dom";
import './index.css'
import MyAuthContext from './authProvider/MyAuthContext';
import myCreatedRoutes from './Components/Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <MyAuthContext>
     <RouterProvider router={myCreatedRoutes} />
    </MyAuthContext>
    </HelmetProvider>
  </React.StrictMode>,
)
