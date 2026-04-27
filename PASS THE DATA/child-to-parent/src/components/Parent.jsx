
import { Child } from "./Child";

export function Parent(){

    // function
    function data(one){
        console.log("one : ",one);   
    }

    return(

        <>
            <h3>This is Parent Component</h3>
            <Child name={data}/>
        </>
    )


}