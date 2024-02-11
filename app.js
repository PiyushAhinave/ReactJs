import React from "react";
import ReactDOM from "react-dom/client";
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

//const heading = React.createElement("h1",{id:"heading"},"React heading");
//we are writing same heading with JSX

//const jsxHeading = <h1 className="heading">This is jsx heading</h1>

//jsx is not javascript babel covert jsx into react element
//to write jsx in multiple line we should write it in () round brackets
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);




//component in react are of two types 1.functional 2. class based
//everything in react is component
//component and elements are two different things


//functional component
//this are javascript functions which returns JSX codes
//names of this functional components should start with capital letter 
//to render we need to write in <component_name/>

//creating functional component
/*

const FunComp = () => {
    return <h1 className="heading">This is functional component 1</h1>;
}

//creating second functional component which have nested elements and renders first component
//rendering first component in following second function in div 
const heading  = <h1 id="heading">this is element rendering</h1>;
//to render element inside component we use {} as following
//we can also call function/component inside {} or </> as in following example 
//we can add javascript code in JSX within {} brackets
const num1 = 11;
const num2 = 35;

const FunCom = () => {

    return <div id="container">
        <h1>{num1+num2}</h1>
        {heading}
        {FunComp()}
        <FunComp/>
        <h1 className="heading">This is second component </h1>
    </div>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering functional component
root.render(<FunCom/>);
*/

//assignment 
//● Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

/*
const header = React.createElement("div",{class:"title"},React.createElement("h1",{id:"heading"},"This is heading 1"),React.createElement("h2",{id:"heading"},"This is heading 2"),React.createElement("h3",{id:"heading"},"This is heading 3"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
*/

//assignment
//Create the same element using JSX
/*
const JSXheading =(<div className="title">
                    <h1 id="heading">This is heading 1 </h1>
                    <h2 id="heading">this is heading 2</h2>
                    <h3 id="heading">this is heading 3</h3>      
                  </div>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXheading);
*/

//assignment
//Create a functional component of the same with JSX
//pass attributes in jsx tags

//always write component name with first letter capital
//always use return to get elements in html
//to render component write its name in <component_name/>

/*
const Comp = () => {
    return (<div className="title">
                    <h1 id="heading">This is heading 1 </h1>
                    <h2 id="heading">this is heading 2</h2>
                    <h3 id="heading">this is heading 3</h3>      
                  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>);
*/

//Composition of Component(Add a component inside another) {TitleComponent} vs {<TitleComponent/>} vs{<TitleComponent></TitleComponent>} in JSX

/*
const Comp1 = () => {
    return <h1 id="heading">This is heading 1 from component 1 is rendering in comp2</h1>
}


//we must write return and component that will render in div tag otherwise it will not work
const Comp2 = () => {
    
    return <div>
        <h2 id="heading">this is heading 2 from component 2</h2>;
    <Comp1></Comp1>
    <Comp1/>
    {Comp1()}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Comp2/>);
*/

//this component is for header

const Header = () => {
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
        </div>

    </div>
)
}


//We need to create one more component for restaurant card

const ResCard = () => {
    return (
        <div className="rescard">
            <div>
            <img className="resimg" alt="Res-logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"/>
            </div>
            <div className="resdetails">
                <h3>Foody hotel</h3>
                <h4>4.4 </h4>
                <h4>200 for 2 persons</h4>
                <h4>40 minutes </h4>
            </div>
        </div>
    )
}

//this component is for body 
const Body = () => {
    return (
        <div className="body">
            <div className="searchbar">
                <input type="search" value="Search Here"/>
            </div>
            <div>
                <ResCard/>
            </div>

        </div>
    )
}

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