import { Component } from "react";

export default class Constructor extends Component{

    constructor(props){
        console.log("The constructor Method Called");
        super();

        //* state
        this.state ={
            count: props.count
        } 

        this.changeCount = this.changeCount.bind(this)
    }

    changeCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <>
                <h3>COUNT : {this.state.count}</h3>
                <button onClick={this.changeCount}>CHANGE COUNT</button>
            </>
        )
    }
}