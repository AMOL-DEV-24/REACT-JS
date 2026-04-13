import { Component } from "react";


class CounterClass extends Component{
    constructor(){
        super();

        this.state = {
            count : 0
        }
    }

    Increment(){
        // eslint-disable-next-line react/no-direct-mutation-state
        //! If you directly change in the state it will not rendered in the UI.

        // // this.state.count = this.state.count+1
        // console.log(this.state.count);


        //! Instead of this, we should use the setState method to update the state    
        // this.setState({
        //     count: this.state.count + 1
        // })
        //! It is Asynchronous First the console.log() executed then after that state is updated.
        // console.log(this.state.count)


     
        //! To Avoid this to get correct count we have use the callfunction i.e arrow function in the setState() method as an second argument.
        //  this.setState({
        //     count: this.state.count + 1
        // },() => {
        //     console.log('Callback Value',this.state.count)
        // })

   //! Another way to update the state is by passing a function as the second argument to setState.
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)

    
    }

    increamentFivem (){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.increamentFive()}>ADD</button>
            </>
        )
    }

}

export default CounterClass;