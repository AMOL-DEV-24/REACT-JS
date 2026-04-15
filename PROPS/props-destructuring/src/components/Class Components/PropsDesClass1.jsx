import { Component } from "react";

export default class PropsDesClass1 extends Component{
    
    render(){
        // Props Destruturing
        const {name, age, address} = this.props;
        return(
            <>
                <h3>Props Destructuring in Class</h3>
                <h4>My Name is  :{name}</h4>
                <h4>My Age is : {age}</h4>
                <h4>My Address is : {address}</h4>
            </>
        )
    }
}
