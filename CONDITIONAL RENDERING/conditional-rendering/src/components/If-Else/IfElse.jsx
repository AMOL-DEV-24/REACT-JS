import { Component } from "react";

export default class IfElse extends Component{
    constructor(props) {
      super(props)
    
    //* State   
      this.state = {
         isLogIn : false
      }
    }

    render(){
        if(this.state.isLogIn){
            return(
                <>
                    <h3>Welcome Amol</h3>
                </>
            )
        }
        else{
            return(
                <>
                    <h3>Welcome Guest</h3>
                </>
            )
        }
    }
}