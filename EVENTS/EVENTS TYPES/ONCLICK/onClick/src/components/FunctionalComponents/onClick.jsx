

export default function OnClick(){

    //* Function
    function apple(){
        alert("Hello")
    } 

    return(
        <>
            <h3>onClick</h3>
            <button onClick={apple}>Click Me</button>
            <button onClick={() => apple()}>Click Me</button>
        </>
    )
}