
export default function ListRendering() {
    let employee = [{id: 123, name: "Baburav", proff: "actor"},{id: 124, name: "Mark", proff: "Doctor"},{id: 125, name: "Zac", proff: "Manager"}]
    let mapEmp=employee.map((person) =>{
        return <h1>My Name is:- {person.name}, My Id is= {person.id}, My Proff is:-{person.proff}</h1>
    })
    return (
    <div>ListRendering{mapEmp}</div>
  )
}