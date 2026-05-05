import { Component } from "react";
import { RegularComponent } from "./Regular Component/RegularComponent";
import { PureCompo } from "./Pure Component/PureComponent";


export class ParentComponent extends Component{

    constructor(props){
        super(props);

        //* state
        this.state ={
            name: "Amol"
        } 
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "Amol"
            })
        },2000)
    }

    render(){
        console.log("*******************Parent Component Rendered*******************")
        return(
            <>
                <h1>This is Parent Component</h1>
                <RegularComponent/>
                <PureCompo/>

            </>
        )
    }

}