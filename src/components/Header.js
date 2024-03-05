import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName,setbtnName]=useState("Login");
    return (<div className="header">
         <div className="img-div">
             <img className="img" alt="food-logo" src="https://thumbs.dreamstime.com/z/food-delivery-logo-template-vector-icon-illustration-170869600.jpg?w=768"/>
         </div>
 
         <div className="list">
             <ul>
                 <li className="li">
                    <Link to="/">Home</Link>
                </li>
                 <li className="li">
                    <Link to="/aboutus"> About Us </Link>
                </li>
                 <li className="li">
                    <Link to="/contact"> Contact Us </Link>
                </li>
                 <li>Cart</li>
                 <li>
                    
             <button className="login" onClick={() => {return btnName==="Login"? setbtnName("logout"):setbtnName("Login")}}>{btnName}</button> 
                 </li>
             </ul>
         </div>
 
     </div>
 )
 }

 export default Header;