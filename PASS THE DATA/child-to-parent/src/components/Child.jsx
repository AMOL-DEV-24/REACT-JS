import { useState } from "react";

export function Child(props) {

    // state
    let [data, setData] = useState();

    function one (e){
        e.preventDefault();
        props.name(data)
    }

    return(
        <>
            <form action="" onSubmit={one}>
                <input type="text" value={data} onChange={(e) =>{setData(e.target.value)}}/> <br />
                <button>Submit</button>
            </form>
        </>
    )
    
}