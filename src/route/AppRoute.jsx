import { createBrowserRouter } from "react-router-dom";
import {Home,Authors,ContactUs,AboutUs ,Register} from '../pages/index'
import MainLayout from "../layouts/MainLayout";

const route = createBrowserRouter([
    {path:'/',
    element:<MainLayout /> ,
    children:[ 
    {index:true ,element:<Home />},
    {path:'/authors', element:<Authors />},
    {path:'/aboutus', element:<AboutUs />},
    {path:'/contactus', element:<ContactUs />},
    {path:'/register', element:<Register />},
    ]
}])

export default route
