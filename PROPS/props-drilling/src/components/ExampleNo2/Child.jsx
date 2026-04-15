import GreatChild from "./GreatChild";

export default function Child({message}){

    return(
        <>
            <h3>This is Child Component</h3>
            <GreatChild message={message}/> 
        </>
    )
}