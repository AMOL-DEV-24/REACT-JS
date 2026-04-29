function Person1({ person, key }) {
 
    return (
        <>
            <h4>
              Key : {key} || Person Id: {person.id} || Person Name: {person.name} || Person Age: {person.age}
            </h4>
        </>
    );
}

export default Person1;
