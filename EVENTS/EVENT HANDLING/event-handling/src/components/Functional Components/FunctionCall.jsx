export default function FunctionCall(){
    function ClickHandler(){
        console.log("Button Clicked");
        alert(`Button Clicked`)
        
    }

    return(
        <div>
            <button onClick={ClickHandler()}>Click</button>
        </div>
    )
}

//! Function Call It is not recommanded way
//* Beacuse Whenevr you start the application then the functiona automatically executed without even clicked.
//? So use Function As Reference way or nither bind the Evnet Handler in the Arrow function 