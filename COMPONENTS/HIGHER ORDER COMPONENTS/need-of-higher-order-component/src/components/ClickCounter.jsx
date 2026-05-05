import { Component } from "react";

class ClickCounter extends Component{

    constructor(){
        super();

        //* state
        this.state ={
            count: 0
        } 
    }


    //* method
    incrementCounter = () =>{
        this.setState((prevState) =>{
            return{
                count : prevState.count + 1
            }
        })
    }

    render(){
        //* Destructuring the state 
        const { count } = this.state;
        return(
            <>
                <button onClick={this.incrementCounter}>Clicked {count}</button>
            </>
        )
    }
}

export default ClickCounter;