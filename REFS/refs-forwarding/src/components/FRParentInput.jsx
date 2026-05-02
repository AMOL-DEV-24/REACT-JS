import { Component, createRef } from "react";
import FRInput from "./FRInput";


export class FRParentInput extends Component{

    constructor(props){
        super(props);

        // 1.Create the Refs
        this.inputRef = createRef(); 
    }

    ClickHandler = () =>{
        this.inputRef.current.focus()
    }

    render(){
        return(
            <>
                <FRInput ref={this.inputRef}/> <br />
                <button onClick={this.ClickHandler}>Focus Input</button>
            </>
        )
    }
}