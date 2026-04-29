function Person({ person }) {
 
    return (
        <>
            <h4>
                Person Id: {person.id} || Person Name: {person.name} || Person Age: {person.age}
            </h4>
        </>
    );
}

export default Person;
