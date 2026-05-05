import { Component } from "react";

//* Higher Order Component 
const UpdatedComponent = (OriginalComponent) =>{

    //* Class Component 
    class NewComponent extends Component{

        constructor(props){
            super(props);

            //* state
            this.state ={
                count: 0
            }
        }

        incrementCount = () =>{
            this.setState((prevState) =>{
                return{
                    count: prevState.count + 1
                }
            })
        }

        render(){
            return(
                <OriginalComponent
                    count = {this.state.count}
                    incrementCount = {this.incrementCount}
                />
            )
        }
    }

    //* Returning the New Component 
    return NewComponent;
}

export default UpdatedComponent;