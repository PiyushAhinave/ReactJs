import UserClass from "./UserClass";
import User from "./UserFunction";
import { Component} from "react";

class AboutUs extends Component{
    constructor(props){
        super(props);
        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log("Parent did mount");
    }
    render (){
        //console.log("parent render");
    return (
        <div>
            <h1>About Us</h1>
            <UserClass name={"Piyush from class component"} location={"pune class"} number={"998877665"}/>
        </div>
        
    )
    
    }
}

export default AboutUs;