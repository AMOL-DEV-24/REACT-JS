//! 2nd Type of Destructuring

function PropsDes1(props){
    // props destructuring
    const {name, proff} = props;
    return(
        <>
            <h3>My Name is : {name} || My Proff is {proff} </h3>
        </>
    )
}

export default PropsDes1;