
export default function PropsDefaultValue(props){
    // props destructuring
    const {name="Amol", age=25, add="Bhalawani"} = props;
    
    return(
        <>
            <h3>Props Default Values</h3>
            <h4>My Name Is : {name}</h4>
            <h4>My Age is : {age}</h4>
            <h4>My Address : {add}</h4>
        </>
    )
}
