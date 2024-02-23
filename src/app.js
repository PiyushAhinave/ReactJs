import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


//This component is for root div
const AppLayout = () => {
    return (<div>
    <Header/>
    <Body/>
    </div>
    );
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)