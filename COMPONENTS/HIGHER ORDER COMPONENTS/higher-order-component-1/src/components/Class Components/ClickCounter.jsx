import { Component } from "react";
import UpdatedComponent from "../HOC/HOC";

class ClickCounter extends Component{

    render() {
        //* Destructuring the props
        const { count, incrementCount, name} = this.props
        return(
            <>
                <button onClick={incrementCount}>{name} Clicked {count} times</button>
            </>
        )
    }
}

export default UpdatedComponent(ClickCounter);