import { Component } from "react";
class StateClass1 extends Component{
    constructor(){
        super();

        this.state = {
            name : "Amol"
        }
    }

    changeData1(){
        this.setState({
            name : "Ganesh"
        })
    }

    changeData2(){
        this.setState({
            name : "Ashutosh"
        })
    }
    render(){
        return(
            <>
                <h1>My Name Is {this.state.name}</h1>
                <button onClick={()=>this.changeData1()}>CHANGE DATA 1</button>
                <button onClick={()=>this.changeData2()}>CHANGE DATA 2</button>
            </>
        )
    }
}

export default StateClass1;