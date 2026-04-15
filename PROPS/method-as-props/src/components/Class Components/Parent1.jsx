import { Component } from "react";
import Child1 from "../Functional Components/Child1";

export default class Parent1 extends Component{
    constructor(props){
        super(props);
        this.state ={
            parentName: "Parent"
        }
        //! Method Binding
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello, ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <>
                <Child1 greetHandler={this.greetParent}/>
            </>
        )
    }
}

//! Passing the Argument from Child to Parent Component.