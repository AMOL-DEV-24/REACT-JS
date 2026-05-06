
import { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
    constructor(props){
        super(props);

        this.state ={
            favoriteColor: "Red"
        }
        this.changeColor = this.changeColor.bind(this);
    }
    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromProps(props, state) {
      console.log("getDerivedStateFromProps() Called")
        return {
            favoriteColor : props.favCol
        }
    }

    changeColor(){
        console.log("changeColor() Called")
        this.setState({
            favoriteColor : "Black"
        })
    }
  render() {
    return (
        <>
            <h3>My Favourite Color Is : {this.state.favoriteColor}</h3>
            <button onClick={this.changeColor}>Change Color</button>
        </>

    )
  }
}
