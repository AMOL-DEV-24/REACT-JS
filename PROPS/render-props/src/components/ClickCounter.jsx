import { Counter } from "./Counter";

function ClickCounter(){
    return(
        <Counter
            render={(count, increamentCount) =>(
                <button onClick={increamentCount}>
                    Clicked {count} times
                </button>
            )}
        />
    )
}

export default ClickCounter;