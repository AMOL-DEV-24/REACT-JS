
export default function Map(){

    let item = ["Apple", "Banana", "Cherry"]
    
    return(
        <div>
            {
               item.map(name => <h4>{name}</h4>)
            }
        </div>
    )
}
//! The key as props essential to pass as an attribut in the tag.
//? Neither We get Warning