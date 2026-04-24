import { Component } from "react";

export default class ClassEventArrow extends Component{
    constructor(){
        super()
    }

    ClickHandler(){
        alert(`Button Clicked`)
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.ClickHandler}>Click</button>
            </div>
        )
    }
}