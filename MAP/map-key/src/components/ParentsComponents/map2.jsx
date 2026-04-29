//! 1.Rendering Object with map()

function Map2 () {
    let obj = [{id : 1,name : "Amol",age : 24,proff : "Software Developer",add : "Bhalawani"}]
    return(
        <>
            <h3>2.Rendering Object with map()</h3>
            {
                obj.map((data,index)=>(
                    <h4 key={index}>{data.id} || {data.name} || {data.age} || {data.proff} || {data.add}</h4>
                ))
            }
        </>
    )
}
export default Map2;