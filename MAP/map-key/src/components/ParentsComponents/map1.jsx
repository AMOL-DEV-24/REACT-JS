//! 1.Rendering Arrays with map()
function Map1 (){
        let Fruits = ["Apple", "Banana", "Cherry" ,"Pineapple"]
    return(
        <>
            <h3>Fruits I Liked : </h3>
            <h4>1.Rendering Arrays with map()</h4>
            {
                Fruits.map((data,index)=>(
                    <h5 key={index}>{index} : {data}</h5>
                ))
            }
        </>
    )
}
export default Map1;
//! The key as props mandatory to pass as an attribut in the tag.