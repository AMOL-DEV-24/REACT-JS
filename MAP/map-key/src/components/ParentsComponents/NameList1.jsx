import Person1 from "../ChildComponents/Person1";

function NameList1() {
    const person = [
        { id: 1, name: "Ganesh", age: 25 },
        { id: 2, name: "Onkar", age: 22 },
        { id: 3, name: "Rohit", age: 23 },
        { id: 4, name: "Amol", age: 24 }
    ];

    // Correctly map and pass individual data objects
    const personList = person.map((person) => <Person1 key={person.id} person={person} />);

    return <div>{personList}</div>;
}

export default NameList1;
