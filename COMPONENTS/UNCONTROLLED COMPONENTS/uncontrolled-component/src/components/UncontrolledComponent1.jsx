

export default function UncontrolledComponent1(){

    const handleSubmit = (event) =>{
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const password = document.querySelector('#password').value;

        alert(`Name: ${name} \n Password: ${password}`)
    }

    return(

        <form action="" onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="">Name</label>
                <input type="text" id="name" placeholder="Enter the Name" />
                <br /><br />

                <label htmlFor="">Password</label>
                <input type="text" id="password" placeholder="Enter the passwoord" />
            </div>

            <div className="submit">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}