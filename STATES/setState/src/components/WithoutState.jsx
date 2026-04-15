import { Component } from "react";

export default class WithoutSetState extends Component{

    constructor(){
        super();

        //* state
        this.state ={
            count: 0
        } 
    }

    increment() {
        this.state.count = this.state.count + 1;
        console.log("count : ",this.state.count);
        
    }

    render(){
        return(
            <>
                <h3>count : {this.state.count}</h3>
                <button onClick={() => this.increment()}>ADD</button>
            </>
        )
    }
}