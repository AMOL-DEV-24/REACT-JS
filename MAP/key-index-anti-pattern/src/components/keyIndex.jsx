
function KeyIndex(){
    const name = ["Amol", "Onkar", "Ganesh", "Rohit", "Ashutosh", "Amol"];

    const nameList = name.map( name => <h4 key={name}>{name}</h4>)

    return(
        <div>
            {nameList}
        </div>
    )
}

export default KeyIndex;
//! Key Should be unique 
//? VM150:1 Encountered two children with the same key, `Amol`. 
//? Keys should be unique so that components maintain their identity across updates.
//? Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.