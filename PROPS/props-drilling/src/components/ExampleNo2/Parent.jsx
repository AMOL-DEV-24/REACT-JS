import Child from "./Child";

export default function Parent(){
    return(
        <>
            <h3>This is Parent Component</h3>
            <Child message="Hello From Parent Component"/>
        </>
    )
}