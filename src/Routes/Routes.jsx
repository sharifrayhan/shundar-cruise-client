import {
    createBrowserRouter,
  } from "react-router-dom";
import Rootpage from "../Pages/Rootpage";
import Home from "../Pages/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Rootpage></Rootpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    }, 
  ]);
  

  export default router