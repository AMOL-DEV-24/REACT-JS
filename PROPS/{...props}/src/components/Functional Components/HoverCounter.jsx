/* eslint-disable react-refresh/only-export-components */
import UpdatedComponent from "../HOC/HOC";

function HoverCounter(props){
    //props destructuring
    const {count, incrementCount, name} = props;
    
    return(
        <>
            <h1 onMouseOver={incrementCount}>
                {name} Hovered {count} times
            </h1>
        </>
    )
}

export default UpdatedComponent(HoverCounter)