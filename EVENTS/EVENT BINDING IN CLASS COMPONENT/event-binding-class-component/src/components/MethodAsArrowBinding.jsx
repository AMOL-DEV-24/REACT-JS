
import { Component } from 'react'

export default class MethodAsArrowBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
    }

    ClickHandler = () =>{
        this.setState({
            message : "Welcome"
        })
        console.log("this : ",this);
        
    }
    render() {
        return (
            <>
                <h3>MethodAsArrowBinding</h3>
                <h4>{this.state.message}</h4>
                <button onClick={this.ClickHandler}>CLICK</button>
            </>
        )
    }
}
