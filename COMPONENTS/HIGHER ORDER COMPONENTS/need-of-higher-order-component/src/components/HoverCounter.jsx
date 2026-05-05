import { Component } from "react";


export default class HoverCounter extends Component{

    constructor(){
        super()

        //* state 
        this.state = {
            count: 0
        } 
    }

    //* method 
    incrementCounter = () => {
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            }
        })
    } 

    render(){
        //* Destructuring the State 
        const { count } = this.state;
        return(
            <>
                <button onMouseOver={this.incrementCounter}>Hovered {count} times</button>
            </>
        )
    }
}