import { Component } from "react";

export default class TernaryOperator extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn : true
      }
    }

    render(){

        return this.state.isLogIn ? (<h3>Welcome Amol</h3>) : (<h3>Welcome Guest</h3>)
    }
}