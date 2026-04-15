import { Component } from "react";

export default class StateDes2 extends Component{

    constructor(props){
        super(props);

        //! state
        this.state ={
            arr : this.props.arr
        } 
    }

    changeData(){
        this.setState({
            arr: [10, 20]
        })
    }

    render(){
        //! state destructuring
        //? Arr Type  
        const [ele1, ele2] = this.state.arr;

        return(
            <>
                <h3>Array Elements {ele1}, {ele2}</h3>
                <button onClick={() =>{this.changeData()}}>Change Data</button>
            </>
        )
    }
}