import { Component } from 'react'

export default class BindingInArrowFunction extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
    }

    ClickHandler(){
        this.setState({
            message : "Welcome"
        })
    }
    render() {
        return (
            <>
                <h2>BindingInArrowFunction</h2>
                <h3>{this.state.message}</h3>
                <button onClick={() =>{this.ClickHandler()}}>CLICK</button>

            </>
        )
    }
}
