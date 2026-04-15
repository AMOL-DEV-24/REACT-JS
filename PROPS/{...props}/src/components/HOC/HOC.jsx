/* eslint-disable no-unused-vars */
import { useState } from "react"

const UpdatedComponent = (WrappedComponent) =>{

    function NewComponent(props){
        
        //* state
        const [count, setCount] = useState(0);
        
        //* functions
        const incrementCount = () =>{
            setCount(count + 1)
        }

        return(
            <WrappedComponent
                count={count}
                incrementCount={incrementCount}
                {...props}
            />
        )
    }
    return NewComponent;
}

export default UpdatedComponent;