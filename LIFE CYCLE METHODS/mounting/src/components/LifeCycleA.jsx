/* eslint-disable no-unused-vars */
import { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component{

    constructor(props){
        super(props);

        this.state ={
            name: "Amol"
        }
        console.log("LifeCycle A Constructor()");
        
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycle A getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycle A componentDidMount()");
    }

    render(){
        console.log("LifeCycle A render()");
        
        return(
            <>
                <h3>LifeCycle A</h3>
                <LifeCycleB/>
            </>
        )
    }
}