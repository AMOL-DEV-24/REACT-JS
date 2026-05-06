/* eslint-disable no-unused-vars */
import { Component } from "react";

export default class UpdatePhase extends Component{
    
    //* 1.Constructor() method
    constructor(props){
        console.log("It's me Constructor");
        super(props);

        this.state ={
            name: props.one
        }
    } 

    //* 2.static getDerivedStateFromProps() method
    static getDerivedStateFromProps(props, state){
        console.log("Its me getDerivedStateFromProps");
        // console.log("🚀 ~ UpdatePhase ~ getDerivedStateFromProps ~ state:", state)
        // console.log("🚀 ~ UpdatePhase ~ getDerivedStateFromProps ~ props:", props) 
    } 

    //* 3.componentDidMount() method
    componentDidMount(){
        console.log("It's Me componentDidMount");
        this.setState({
            name: "mine"
        })
    } 

    //* 4.shouldComponentUpdate() method
    shouldComponentUpdate(){
        console.log("Its me shouldComponentUpdate");
        return true;
    }

    //* 5.componentDidUpdate() method
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Its me componentDidUpdate");
        console.log("snapshot : ",snapshot);
        
    }    

    //* render() method
    render(){
        console.log("Its me render");
        
        return(
            <>
                <h3>My Name Is {this.state.name}</h3>
            </>
        )
    } 

}