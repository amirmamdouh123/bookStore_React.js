import { createBrowserRouter } from "react-router-dom";
import {Home,Authors,AboutUs ,Register ,Login} from '../pages/index'
import MainLayout from "../layouts/MainLayout";
import BookDetails from "../pages/BookDetails/BookDetails";
import Carts from "../pages/Carts/Carts";
import Contact from "../pages/ContactUs/Contact";

const route = createBrowserRouter([
    {path:'/',
    element:<MainLayout /> ,
    children:[ 
    {index:true ,element:<Home />},
    {path:'/authors', element:<Authors />},
    {path:'/aboutus', element:<AboutUs />},
    {path:'/contactus', element:<Contact />},
    {path:'/register', element:<Register />},
    {path:'/login', element:<Login />},
    {path:'/book/:id', element:<BookDetails />},
    {path:'/cart', element:<Carts />},

    ]
}])

export default route
