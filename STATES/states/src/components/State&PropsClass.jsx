import { Component } from "react";


class State$PropsClass extends Component{

    //! Constructor
    constructor(props){
        super(props);

        //? state 
        this.state ={
            name: props.name,
            age: props.age,
        } 
    } 

    changeData1(){
        this.setState({
            name: "Ganesh"
        })
    }

    changeData2(){
        this.setState({
            name: "Ashutosh"
        })
    }

    render(){
        return(
            <>
                <h3>My Name is : {this.state.name}</h3>
                <button onClick={() =>{this.changeData1()}}>Change Data 1</button>
                <button onClick={() =>{this.changeData2()}}>Change Data 2</button>
            </>
        )
    }
}

export default State$PropsClass;