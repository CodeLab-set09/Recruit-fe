import { createBrowserRouter } from "react-router-dom";
import Layout from "../landingpage/Layout";



export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    }
])