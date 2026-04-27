import { Component } from "react";

export default class WhyEventBinding extends Component{
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
                <h3>Why EVent Binding IN Necessary </h3>
                <h3>{this.state.message}</h3>
                <button onClick={this.ClickHandler}>CLICK</button>
            </>
        )
    }
}

//? WhyEventBinding.jsx:13 Uncaught TypeError: Cannot read properties of undefined (reading 'setState')  at ClickHandler (WhyEventBinding.jsx:13:14)
//* We got this message after clicking on the button
//* Here is the This keyword getting in the undefined  