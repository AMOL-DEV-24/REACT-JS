
export default function List1(){

    let employee = [{name: "Vjay", id: 123, prof: "Electrical Engg"},{name: "Jay", id: 124, proff: "Civil Engg"}, {name: "Sanjay", id: 125, proff: "Computer Engg"}]

    let empData = employee.map((data, index) =>{
        return <h3>Key {index} || Name :- {data.name}</h3>
    })
    return(
        <>
            <div>List {empData}</div>
        </>
    )
}