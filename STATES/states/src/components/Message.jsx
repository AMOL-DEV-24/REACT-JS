import { Component } from "react";

export default class Message extends Component{

    //! constructor
    constructor(){
        super();

        this.state ={
            Message: "Welcome Visitor"
        }
    } 

    changeMessage(){
        this.setState({
            Message: "Thank you for Subscribing"
        })
    }

    render(){
        return(
            <>
                <h3>{this.state.Message}</h3>
                <button onClick={() =>{this.changeMessage()}}>Subscribe</button>
            </>
        )
    }
}