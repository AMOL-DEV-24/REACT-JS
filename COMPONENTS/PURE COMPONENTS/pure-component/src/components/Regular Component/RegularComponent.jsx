import { Component } from "react";

export class RegularComponent extends Component{

    render(){

        console.log("**********Regular Component Rendered**********")

        return(
            <>
                <h3>This is Regular Component</h3>
                <h4>{this.props.name}</h4>
            </>
        )
    }
}