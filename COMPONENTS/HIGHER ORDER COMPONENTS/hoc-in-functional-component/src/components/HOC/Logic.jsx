/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

export default function Logic(Value, add=1) {
  return (
    function two(props){
        //* states 
        let [count, setCount] = useState(0)

        return(
            <Value  {...props} count={count} inc={()=>setCount(count + add)}/>
        )
    }
  )
}
