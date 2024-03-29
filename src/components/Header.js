import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    
const {loggedInUser} = useContext(UserContext);

    const cart = useSelector((store)=>store.cart.items);


    const [btnName,setbtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return (<div className="m-2 h-24 flex justify-between shadow-xl bg-gray-400 ">
         <div className="">
             
         </div>
 
         <div className="flex items-center pl-2 " >
         <img className="w-30 h-20 absolute left-4" alt="food-logo" src="https://thumbs.dreamstime.com/z/food-delivery-logo-template-vector-icon-illustration-170869600.jpg?w=768"/>
             <ul className="flex ">
             
                <li className=" p-2 m-2">
                    Online : {onlineStatus?"🟢":"🔴"}
                </li>
                 <li className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">
                    <Link to="/">Home</Link>
                </li>
                 <li className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">
                    <Link to="/aboutus"> About Us </Link>
                </li>
                 <li className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">
                    <Link to="/contact"> Contact Us </Link>
                </li>
                <li className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">
                    <Link to="/grocery"> Grocery </Link>
                </li>
                <li  className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">
                   <Link to="/cart"> 🛒 ({cart.length})</Link>
                </li>
                 <li className="pr-4">
                    
             <button className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500" onClick={() => {return btnName==="Login"? setbtnName("logout"):setbtnName("Login")}}>{btnName}</button> 
                 </li>
                  <li className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-500">{loggedInUser}</li>
                 
             </ul>
         </div>
 
     </div>
 )
 }

 export default Header;