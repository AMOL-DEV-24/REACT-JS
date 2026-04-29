
export default function List2()  {
    let empName = ["ganya","baburav","gangadar","baburav"];
    let getName = empName.map(data => <h1 key={data}>{data}</h1>)

    return (
        <div>
            <h3>{getName}</h3>
        </div>
    )
}

