import { Component } from "react";

export default class ClassEventHandling extends Component{

    constructor(){
        super()
    }

    ClickHandler(){
        alert(`Button Clicked`)
    }

    render(){
        return(
            <div>
                <button onClick={this.ClickHandler}>CLICK</button>
            </div>
        )
    }
}