import React from "react";
import ReactDOM from "react-dom";
/*
const heading = React.createElement("h1",{},"Hello world from react");//to create element
const root = ReactDOM.createRoot(document.getElementById("root"));//to create root
root.render(heading)//to display heading in root on webpage
*/
/*
const heading = React.createElement("h1",{id:"heading"},"Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/*
we need to create root only once 
we can use multiple roots in single file
root is id for div tag in html in which we will render different elements
*/

/*
const heading2 = React.createElement("h3",{id:"heading1"},"This is from root 2");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);
*/

//creating child elements 
//sibling elements
/*
const parent = React.createElement(
    "div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am heading"),React.createElement("h2",{},"I am heading2")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am heading"),React.createElement("h2",{},"I am heading2")])
    );

 //if we want to create sibling elements we need to create array for sibling element as above we created fo h1 and h2  
 //in above example we have created two child div elements for one parent div elements 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/