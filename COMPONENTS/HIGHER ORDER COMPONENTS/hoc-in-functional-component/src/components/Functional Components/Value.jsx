
export default function Value(Value) {
    return (
        function two(props){
            return(
                <Value  {...props} three = "three"/>
            )
        }
      )
    }
    