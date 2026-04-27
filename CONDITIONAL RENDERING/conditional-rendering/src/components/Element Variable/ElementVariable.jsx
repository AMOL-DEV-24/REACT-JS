import { Component } from "react";

export default class ElementVariable extends Component{
    constructor(props) {
      super(props)
    
    //* State
      this.state = {
         isLogin : true
      }
    }

    render(){
        let message;

        if(this.state.isLogin){
            message = <h3>Welcome Amol</h3>
        }
        else{
            message = <h3>Welcome Guest</h3>
        }

        //* returning the JSX
        return message;

    }

}