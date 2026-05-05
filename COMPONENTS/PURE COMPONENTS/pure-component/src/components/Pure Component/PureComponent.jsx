import { PureComponent } from "react";

export class PureCompo extends PureComponent{

    render(){
        console.log("********Pure Component Rendered*********")

        return(
            <>
                <h3>This is Pure Component</h3>
                <h4>{this.props.name}</h4>
            </>
        )
    }
}