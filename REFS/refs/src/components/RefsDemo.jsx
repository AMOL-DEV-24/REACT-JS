import { createRef } from "react";
import { Component } from "react";

export default class RefsDemo extends Component{

    constructor(props){
        super(props);

        //* 1.Create the Ref
        this.inputRef = createRef(); 
    }

    componentDidMount(){
        console.log("inputRef : ",this.inputRef);
        //* 2.Modify the DOM directly with refs 
        this.inputRef.current.focus();
        this.inputRef.current.value = "Amol Pawar";
        this.inputRef.current.style.color = "red"
    }

    render(){
        return(
            <>
                {/* 3.Attach the Reference to the input */}
                <input type="text" ref={this.inputRef} />
            </>
        )
    }
}