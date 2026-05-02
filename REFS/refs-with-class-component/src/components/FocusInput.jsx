import { Component, createRef } from "react";
import Input from "./Input";

export class FocusInput extends Component{
    constructor(props){
        super(props);

        // 1.Creating the Refs
        this.componentRef = createRef();
    }

    Clickhandler = () =>{
        this.componentRef.current.FocusInput();
    }

    render(){
        return(
            <>
                <Input ref={this.componentRef} /> <br/>
                <button onClick={this.Clickhandler}>Focus Input</button>
            </>
        )
    }
}