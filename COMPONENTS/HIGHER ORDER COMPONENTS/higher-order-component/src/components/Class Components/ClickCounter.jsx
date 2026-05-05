import { Component } from "react";
import UpdatedComponent from "../HOC/HOC";


class ClickCounter extends Component{

    render(){
        //* Destructuring the props
        const { count, incrementCount} = this.props;
        
        return(
            <>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </>
        )
    }
}

export default UpdatedComponent(ClickCounter);