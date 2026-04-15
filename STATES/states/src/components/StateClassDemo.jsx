import { Component } from "react";

class StateClassDemo extends Component{
    //! 1.Constructor
    constructor(){
        super();

        //? State
        this.state ={
            statement: "Hello World"
        } 
    }

    render(){
        return(
            <>
                <h1>{this.state.statement}</h1>
            </>
        )
    }
}

export default StateClassDemo;