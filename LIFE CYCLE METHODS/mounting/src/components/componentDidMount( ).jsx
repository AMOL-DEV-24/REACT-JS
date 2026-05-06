import { Component } from "react";


export default class ComponentDidMount extends Component{

    constructor(){
        super();
        
        //* state
        this.state ={
            color: "Yellow"
        } 
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                color: "Red"
            })
        },2000)
    }

    render(){
        return(
            <>
                <h3>My favorite Color is : {this.state.color}</h3>
            </>
        )
    }
}