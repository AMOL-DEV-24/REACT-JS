import { Component } from "react";

export class PropsObjectDesClass extends Component{

    render(){

        return(
            <>
                <h4>Name : {this.props.obj.name}</h4>
                <h4>Age: {this.props.obj.age}</h4>
                <h4>Address: {this.props.obj.address}</h4>
            </>
        )
    }
}