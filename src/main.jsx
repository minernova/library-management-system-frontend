import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./pages/Books.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";

import {loader as booksLoader} from './pages/Books.jsx'
import {loader as profileLoader} from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/books',
        element:<Books/>,
        loader:booksLoader,
      },
      {
        path:'/profile',
        element:<Profile/>,
        loader:profileLoader
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
