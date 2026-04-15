import { Component } from "react";


export class PropsDesClass extends Component{

    render(){

        return(
            <>
                <h4>My Name is : {this.props.name}</h4>
                <h4>MY Age is : {this.props.age}</h4>
                <h4>My Address is : {this.props.address}</h4>
            </>
        )
    }
}