import { useState } from "react";

const Header = () => {

    const [btnName,setbtnName]=useState("Login");
    return (<div className="header">
         <div className="img-div">
             <img className="img" alt="food-logo" src="https://thumbs.dreamstime.com/z/food-delivery-logo-template-vector-icon-illustration-170869600.jpg?w=768"/>
         </div>
 
         <div className="list">
             <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
             </ul>
             <button onClick={() => {return btnName==="Login"? setbtnName("logout"):setbtnName("Login")}}>{btnName}</button> 
         </div>
 
     </div>
 )
 }

 export default Header;