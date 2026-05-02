import { useState } from 'react'

export default function ControlledComponent2() {
    // states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // form validation
        let formErrors = {};
        if (name.trim() === "") {
            formErrors.name = "Name is required";
        }
        else if(name.length < 3){
            formErrors.name = "Name must be at least 3 characters";
        }

        if (email.trim() === "") {
            formErrors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
        }

        if (password.trim() === "") {
            formErrors.password = "Password is required";
        }
        else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters";
        }

        setErrors(formErrors);

        // if no errors, submit the form
        if (Object.keys(formErrors).length === 0) {
            console.log("Form submitted");
            alert("Form submitted successfully!");
            // clear the form
            setName("");
            setEmail("");
            setPassword("");
        }
    }
  return (
    <>
      <form>
        <input 
            type="text"
            value={name}
            placeholder='Enter Your Name'
            onChange={(e) =>{setName(e.target.value)}} 
        />
        <br />
        {errors?.name && <span style={{color: 'red'}}>{errors.name}</span>}
        <br /><br />
        <input 
            type="email"
            value={email}
            placeholder='Enter Your Email'
            onChange={(e) =>{setEmail(e.target.value)}}
        />
        <br />
        {errors?.email && <span style={{color: 'red'}}>{errors.email}</span>}
        <br /><br />
        <input 
            type="password"
            value={password}
            placeholder='Enter Your Password'
            onChange={(e) =>{setPassword(e.target.value)}} 
        />
        <br />
        {errors?.password && <span style={{color: 'red'}}>{errors.password}</span>}
        <br /><br />
        <button type="submit" onClick={handleSubmit}>Submit</button>    
        <button type="reset"
            onClick={()=>{
                setName('');
                setEmail('');
                setPassword('')
            }}
        >Clear</button>
      </form>
      <div className="form-values">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
      </div>
    </>
  )
}
