import { Component } from "react";


export default class StateDes1 extends Component{

    //! Destructuring
    constructor({name, age}){
        super();

        // ? state
        this.state ={
            name: name,
            age: age
        }
    } 

    changeData(){
        this.setState({
            name: "John Doe",
            age: 30
        })
    }

    render(){
        //! State Destructuring
        //? 1.Object Type 
        const {name, age} = this.state;

        return(
            <>
                <h3>My Name is {name} || My Age is {age}</h3>
                <button onClick={() =>{this.changeData()}}>Change Data</button>
            </>
        )
    }
}