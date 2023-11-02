import {
    createBrowserRouter,
  } from "react-router-dom";


import Rootpage from "../Pages/Rootpage/Rootpage";
import Home from "../Pages/Home/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Rootpage></Rootpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:3000/spots')
          
        },
      ],
    }, 
  ]);
  

  export default router