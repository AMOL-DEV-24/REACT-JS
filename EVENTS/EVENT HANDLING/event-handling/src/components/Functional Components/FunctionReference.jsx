
export default function FunctionReference(){

    function ClickHandler(){
        alert(`Button Clicked`)
    }

    return(
        <div>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}