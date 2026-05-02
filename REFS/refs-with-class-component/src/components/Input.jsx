import { Component, createRef } from "react";

class Input extends Component{
    constructor(props){
        super(props);

        // 1.Creating the Ref
        this.inputRef = createRef(); 
    }

    FocusInput(){
        this.inputRef.current.focus();
    }

    render(){
        return(
            <>
                <input type="text" name="" id="" ref={this.inputRef}/>
            </>
        )
    }
}

export default Input;