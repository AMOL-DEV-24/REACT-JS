
export default function Child1(props){
    return(
        <>
            <button onClick={()=>{props.greetHandler('Child')}}>Greet Parent</button>
        </>
    )
}