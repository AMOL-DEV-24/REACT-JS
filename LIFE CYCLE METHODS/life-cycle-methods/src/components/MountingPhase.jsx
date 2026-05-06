/* eslint-disable no-unused-vars */
import { Component } from "react";

export default class MountingPhase extends Component{

    //* 1.Constructor Method 
    constructor(props){
        console.log("It's me Constructor");
        super();
        
        //* state
        this.state ={
            name: props.one
        } 
    }

    //* 2.static getDerivedStateFromProps method
    static getDerivedStateFromProps(props, state){
        console.log('It me getDerivedStateFromProps');
        // console.log("🚀 ~ Mounting ~ getDerivedStateFromProps ~ state:", state)
        // console.log("🚀 ~ Mounting ~ getDerivedStateFromProps ~ props:", props)

        return null;
    }

    //* 3.componentDidMount method
    componentDidMount(){
        console.log('Its Me componentDidMount');
        this.setState({
            name: 'mine'
        })
    }

    //* 4. render() method
    render(){
        console.log('Its me render method');
        return(
            <>
                <h3>My Name is {this.state.name}</h3>
            </>
        )
    }  

}