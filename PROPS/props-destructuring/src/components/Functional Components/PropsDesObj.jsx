
export default function PropsDesObj(props){
    // props destructuring
    const {name, age, address} = props;
    return(
        <>
            <h3>Object Destructuring</h3>
            <h4>My Name is : {name}</h4>
            <h4>My Age is : {age}</h4>
            <h4>My Address is : {address}</h4>
        </>
    )
}