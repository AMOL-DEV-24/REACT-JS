function Map4(){
    let Friends = ["Amol", "Rohit", "Ganesh", "Onkar"]
    let nameList = Friends.map(name => <h4 key={name}>{name}</h4>)
    return <h2>{nameList}</h2>
}
export default Map4;