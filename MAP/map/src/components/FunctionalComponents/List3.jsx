

export default function List3(){
    let empName = ["ganya", "baburav" , "gangadar"]
    let getName = empName.map((data, index) =>(
        <h3 key={index}>{index}.{data}</h3>
    ))

    return(
        <>
            <div>
                {getName}
            </div>
        </>
    )
}