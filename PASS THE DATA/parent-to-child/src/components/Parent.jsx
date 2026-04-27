import Child from "./Child";

export default function Parent(){

    let string = "Hi Amol";

    return(
        <>
            <h3>This is Parent Component</h3>
            <Child str ={string}/>
        </>
    )
}