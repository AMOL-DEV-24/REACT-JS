import { Component } from "react";
import UpdatedComponent from "../HOC/HOC";

class HoverCounter extends Component{
    render(){
        // destructuring the props
        const { count, incrementCount, name} = this.props
        return(
            <>
                <h1 onMouseOver={incrementCount}>{name} Hovered {count} times</h1>
            </>
        )
    }
}
export default UpdatedComponent(HoverCounter);