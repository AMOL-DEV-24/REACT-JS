 
function PropsDestructuring({one, two, three, four}){
    console.log("One : ",one);
    console.log("Two : ",two);
    console.log("three : ",three);
    console.log("four : ",four);

    
    return(
        <h3>{one}</h3>
    )
}

export default PropsDestructuring;