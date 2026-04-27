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
                {/* 1.You Can Pass The Method Reference  */}
                {/* <button onClick={()=>this.ClickHandler}>Click</button> */}
                {/* 2.You can Method call as well in the Arrow  */}
                <button onClick={()=>this.ClickHandler()}>Click</button>
            </div>
        )
    }
}