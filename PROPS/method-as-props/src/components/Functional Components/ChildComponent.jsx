
export default function ChildComponent(props){
    return(
        <>
            <>
                {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
                <button onClick={()=>{props.greetHandler()}}>Greet Parent</button>
            </>
        </>
    )
}