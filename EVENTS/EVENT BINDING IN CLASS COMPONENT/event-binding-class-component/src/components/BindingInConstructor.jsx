import { Component } from "react";

export default class BindingInConstructor extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }

    //! Binding the Event Handler in the Constructor.
        this.ClickHandler = this.ClickHandler.bind(this);
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
                <h2>Binding In the Constructor</h2>
                <h3>{this.state.message}</h3>
                <button onClick={this.ClickHandler}>CLICK</button>
            </>
        )
    }
}