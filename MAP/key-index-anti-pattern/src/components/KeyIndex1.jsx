
function KeyIndex1 (){
    const name = ["Amol", "Onkar", "Ganesh", "Rohit", "Ashutosh", "Amol"];

    const nameList = name.map((name,index) => <h4 key={index}>{index} : {name}</h4>)

    return <div>{nameList}</div>

}

export default KeyIndex1;