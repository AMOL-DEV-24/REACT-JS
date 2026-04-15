import { Component } from "react";

export default class SetState extends Component{

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
        })
        console.log("count :",this.state.count);
        
    }

    render(){
        return(
            <>
                <h3>COUNT : {this.state.count}</h3>
                <button onClick={()=>{this.increment()}}>ADD</button>
            </>
        )
    }
}