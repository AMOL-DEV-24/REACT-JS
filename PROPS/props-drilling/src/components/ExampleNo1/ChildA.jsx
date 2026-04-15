import ChildB from "./ChildB";


export default function ChildA({name}){

    return(
        <>
            <h1>Example 1</h1>
            <ChildB name={name}/>
        </>
    )
}