import { useState } from "react";


const User = (props) =>{

    const[count]=useState(0);//creating state variable for count with initial value 0
    const[count2]=useState(2);
    return (
        <div className="userFun">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h4>{props.name}</h4>
            <h4>{props.location}</h4>
            <h4>{props.number}</h4>
        </div>
    )
}

export default User;