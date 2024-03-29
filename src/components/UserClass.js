import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                login:"Piyush",
                id:"Default",
                url:"shjdkkkdjdkh",
            }
        }

       
        //console.log("child constructor");
    };
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/PiyushAhinave");
        const json = await data.json();



        console.log(json);

        this.setState={
            userInfo:json,
        }
    }

    
    render(){
        //console.log("child render");

        const {login,id,url}  = this.state.userInfo;
        
        return (
            
        <div className="userFun">
            
            <h1>Name = {login}</h1>
            <h4>Location = {id}</h4>
            <h4>Url = {url}</h4>
            
        </div>
        )
    }
}

export default UserClass;