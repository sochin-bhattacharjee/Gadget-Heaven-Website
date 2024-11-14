import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './Compoents/Error/Error';
import Statistics from './Compoents/Statistics/Statistics';
import DashBoard from './Compoents/DashBoard/DashBoard';
import Root from './Compoents/Root/Root';
import Home from './Compoents/Home/Home';
import Account from './Compoents/Account/Account';
import ProductDetails from './Compoents/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'/account',
        element:<Account></Account>
      },
      {
        path:"/product/:id",
        element:<ProductDetails></ProductDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
