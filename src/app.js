import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AboutUs from "./components/AboutUs.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";



//This component is for root div
const AppLayout = () => {
    return (<div>
    <Header/>
    <Outlet/>
    </div>
    );
    
}

//creating routes for different components
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/aboutus",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurantmenu/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>)