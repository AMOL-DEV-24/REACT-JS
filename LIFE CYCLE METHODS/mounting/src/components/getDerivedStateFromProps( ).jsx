/* eslint-disable no-unused-vars */
import { Component } from "react";


export default class GetDerivedStateFromProps extends Component{

    constructor(){
        super();

        this.state ={
            favoriteColor: "Black"
        }
    }

    static getDerivedStateFromProps(props, state){
        return{
            favoriteColor: props.favCol
        }
    }

    render(){
        return(
            <>
                <h3>My Favorite Color is {this.state.favoriteColor}</h3>
            </>
        )
    }
}