import { Component } from "react";

export default class BindingInRenderMethod extends Component{

    constructor(){
        super();

        this.state ={
            message : "Hello"
        }
    }

    ClickHandler(){
        this.setState({
            message : "Welcome"
        })
        console.log("this : ",this);
        
    }

    render(){
        return(
            <>
                <h2>Binding in the Render Method</h2>
                <h3>{this.state.message}</h3>
                <button onClick={this.ClickHandler.bind(this)}>CLICK</button>
            </>
        )
    }
}