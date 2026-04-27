import { Component } from "react";

export default class IIFE extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn : false
      }
    }

    render(){
        let { isLoggedIn } = this.state;

        return(
            (function(){
                if(isLoggedIn){
                    return <h3>Welcome User</h3>
                }
                else{
                    return <h3>Please Log In</h3>
                }
            }())
        )
    }
}