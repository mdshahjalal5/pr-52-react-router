import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import FreindDetails from "../components/FreindDetails/FreindDetails";
import Freinds from "../components/Freinds/Freinds";
import Home from "../components/Home/Home";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";
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
            {path:'/freind/:freindId',
            loader:async({params})=>{
                console.log(params)
                return fetch(`https://jsonplaceholder.typicode.com/users/${params.freindId}`)
            },
         element:<FreindDetails></FreindDetails>},
         {path:'/posts', element:<Posts></Posts>,
            loader:async()=>{
                return fetch(`https://jsonplaceholder.typicode.com/posts`)
            },
            
        },
        {path:'/post/:postId', loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },  element:<PostDetails></PostDetails>},
         
        ]
    },
    {path:'*', element:<Undefined></Undefined>},
   

])