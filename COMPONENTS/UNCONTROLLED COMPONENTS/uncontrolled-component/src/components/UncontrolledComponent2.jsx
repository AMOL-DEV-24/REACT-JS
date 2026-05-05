import { useRef } from "react";

export default function UncontrolledComponent2(){
    //* Creating Refs Using hooks 
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        alert(`Name : ${name} \n Password: ${password}`)
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" id='name' ref={nameRef} placeholder='Enter The Username' />
                <br /><br />
                <label htmlFor="">Pasword</label>
                <input type="password" id='password' ref={passwordRef} placeholder='Enter The Password' />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}