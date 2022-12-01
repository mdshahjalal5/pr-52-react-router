import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Freinds from "../components/Freinds/Freinds";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Undefined from "../components/Undefined/Undefined";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
        path:'/',
         element:<Root></Root>,
         children:[
            {path:'/', element:<Home></Home>},
            {path:'/products', element:<Products></Products>},
            {path:'/FreindS',
                loader:async()=>{
                    return fetch(`https://jsonplaceholder.typicode.com/users`)
                },
             element:<Freinds></Freinds>},
            {path:'/home', element:<Home></Home>},
            {path:'/about', element:<About></About>}, 
            {path:'*', element:<Undefined></Undefined>}
         ]
    }
])