import { BrowserRouter } from "react-router-dom";
import Contact from "../components/Contact"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom";

describe("purpose",()=>{

it("should check contact component is loading",()=>{
    render(
    <Contact/>
    );

    const Heading = screen.getByRole("heading");
    expect(Heading).toBeInTheDocument();
});

it("should load all input box",()=>{
    render(<Contact/>)

    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
});

it("should load button",()=>{
render(<Contact/>);

const button = screen.getByRole("button");
expect(button).toBeInTheDocument();

});

})