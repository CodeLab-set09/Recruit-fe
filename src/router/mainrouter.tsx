import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Landingpage from "../pages/landingpage/Landingpage";
import About from "../pages/About";
import Contactus from "../pages/Contactus";
import Signup from "../pages/auth/Signup";
import Signin from "../pages/auth/Signin";



export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          {path:"/" ,element:<Landingpage/>},
          {path:"/about" ,element:<About/>},
          {path:"/contactus" ,element:<Contactus/>}
        ]
    },
    {path:"/signup" ,element:<Signup/>},
    {path:"/signin" ,element:<Signin/>}
])