import { Component } from "react";
import UpdatedComponent from "../HOC/HOC";


class HoverCounter extends Component{

    render(){
        //* Destructuring the Props
        const { count, incrementCount } = this.props;
        
        return(
            <>
                <button onMouseOver={incrementCount}>Hovered {count} times</button>
            </>
        )
    }
}

export default UpdatedComponent(HoverCounter)