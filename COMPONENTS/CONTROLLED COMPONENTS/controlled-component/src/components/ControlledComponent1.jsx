import { useState } from "react";


export default function ControlledComponent1(){

    //* States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className="form">
            {/* 1.Name Field */}
                <input 
                    type="text" 
                    value={name}
                    placeholder="Enter The Name" 
                    onChange={(e) =>{setName (e.target.value)}}   
                />
                <br /><br />
            {/* 2.Email Field */}
                <input 
                    type="text" 
                    value={email}
                    placeholder="Enter The Email"
                    onChange={(e) =>{ setEmail(e.target.value)}}
                />
                <br /><br />
            {/* 3.Password Field */}
                <input 
                    type="password" 
                    value={password}
                    placeholder="Enter The Pasword"
                    onChange={(e) =>{setPassword(e.target.value)}}
                />
                <br /><br />
            {/* 4.Buttons */}
                <button>Submit</button>
                <button 
                    type="reset"
                    onClick={()=>{
                        setName('');
                        setEmail('');
                        setPassword('')
                    }}
                >Clear</button>
            </div>

            <div className="form-values">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
            </div>
        </>
    )

}