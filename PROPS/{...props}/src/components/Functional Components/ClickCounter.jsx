/* eslint-disable react-refresh/only-export-components */
import UpdatedComponent from "../HOC/HOC";

function ClickCounter(props){
    //props destructuring
    const {count, incrementCount, name} = props;

    return(
        <>
            <button onClick={incrementCount}>{name} Clicked {count} times</button>
        </>
    )
}

export default UpdatedComponent(ClickCounter);