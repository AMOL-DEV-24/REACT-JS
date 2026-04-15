import { Component } from "react";


export default class Count extends Component{

    //! constructor
    constructor(){
        super();

        //? state
        this.state ={
            count: 0
        } 
    } 

    increment(){
        this.setState({
            count: this.state.count + 1,
            //* For Priting the count in the console 
        },()=>{console.log(this.state.count);
        })
    }

    render(){
        return(
            <>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.increment()}>Change Count</button>
            </>
        )
    }
}