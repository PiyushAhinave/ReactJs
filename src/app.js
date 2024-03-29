import React, {lazy,Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AboutUs from "./components/AboutUs.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js"
import Cart from "./components/Cart.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));

//This component is for root div
const AppLayout = () => {
    const [userName,setUserName] = useState();
    
    useEffect(()=>{
        const data = {
            name:"Piyush Ahinave",
        }
        setUserName(data.name);
    },[]);

    return (
    <Provider store={appStore}>    
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>  
    <div>
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
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
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/restaurantmenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>)