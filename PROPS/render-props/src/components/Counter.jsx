import { Component } from "react";

export class Counter extends Component{
    //! Constructor
    constructor(props){
        super(props);

        //! state
        this.state ={
            count: 0
        }
    }

    //! Method Declaration
    increamentCount = () =>{
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            }
        })
    }

    render(){
        return this.props.render(this.state.count, this.increamentCount)
    }
}