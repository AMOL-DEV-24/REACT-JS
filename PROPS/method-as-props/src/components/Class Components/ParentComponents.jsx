import { Component } from "react";
import ChildComponent from "../Functional Components/ChildComponent";

export default class ParentComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            parentName: "Parent"
        }
        //! Method Binding
        this.greetParent = this.greetParent.bind(this);

    }

    greetParent(){
        alert(`Hello, ${this.state.parentName}`)
    }

    render(){
        return(
            <>
                <ChildComponent greetHandler={this.greetParent}/>
            </>
        )
    }
}