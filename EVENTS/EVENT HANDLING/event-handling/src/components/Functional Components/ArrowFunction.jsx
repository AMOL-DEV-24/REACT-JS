export default function ArrowEventHandler(){

    function ClickHandler(){
        alert(`Button Clicked`)
    }

    return(
        <div>
            <button onClick={()=>ClickHandler()}>Click</button>
        </div>
    )
}