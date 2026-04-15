import { Component } from "react";


export default class PrevStateMultipleCallback extends Component{

    constructor(){
        super();

        //* state
        this.state ={
            count: 0
        } 
    }

    increment(){
        this.setState(prevState =>({
            count: prevState.count + 1
        }),
        //! Callback Function
        () =>{
            console.log("Callback Value : ", this.state.count);
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
                <button onClick={()  =>{ this.incrementFive()}}>ADD</button>
            </>
        )
    }


}