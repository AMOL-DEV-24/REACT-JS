
export default function FunctionClick(){

    //! Function Handler
    function ClickHandler(){
        alert(`Button Clicked`);
        console.log("Button Clicked");
    } 

    return(
        <div>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}