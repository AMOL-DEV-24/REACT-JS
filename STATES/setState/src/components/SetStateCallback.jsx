import { Component } from "react";

export default class SetStateCallback extends Component{

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
            //? Callback Function 
        },() =>{
            console.log("Callback : ",this.state.count);
            
        })
    }

    render(){
        return(
            <>
                <h3>count : {this.state.count}</h3>
                <button onClick={()=>{this.increment()}}>ADD</button>
            </>
        )
    }
}