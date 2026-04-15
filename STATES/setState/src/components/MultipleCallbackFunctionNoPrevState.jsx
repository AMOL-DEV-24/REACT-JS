import { Component } from "react";


export default class MultipleCallbackFunNoPrevState extends Component{

    constructor(){
        super();

        //* state
        this.state ={
            count: 0
        } 
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        },() =>{
            console.log("Callback Fn : ",this.state.count);
            
        })
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return(
            <>
                <h3>COUNT : {this.state.count}</h3>
                <button onClick={() =>{this.incrementFive()}}>ADD</button>
            </>
        )
    }
}