/* eslint-disable no-unused-vars */
import { Component } from "react";

export default class LifeCycleB extends Component{
    constructor(props){
        console.log("LifeCycle B constructor()");
        
        super(props);

        this.state ={
            name: "Amol"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle B getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle B componentDidMount()"); 
    }

    render(){
        console.log("LifeCycle B render()");
        return(
            <>
                <h4>LifeCycle B</h4>
            </>
        )
    }
}