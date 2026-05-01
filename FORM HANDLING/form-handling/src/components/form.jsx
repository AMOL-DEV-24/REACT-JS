import { Component } from "react";

export class Form extends Component{

    constructor(props){
        super(props);

        //* state
        this.state ={
            username: " ",
            comments: " ",
            topic: "react"
        } 
    }

    // handling username function
    handleUserNameChange = (event) =>{
        console.log("🚀 ~ Form ~ event:", event)
        this.setState({
            username: event.target.value
        })
    }

    // handling Comments function
    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    // handling the Topic change function
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    // Submit Function
    handleSubmit = (event) =>{
        alert(`${this.state.username} || ${this.state.comments} || ${this.state.topic}`);
        event.preventDefault();
    }

    render(){
        return(
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="username">
                        <label htmlFor="">UserName</label>
                        <input type="text" name="" id="" value={this.state.username} onChange={this.handleUserNameChange}/>
                    </div>
                    <div className="comments">
                        <label htmlFor="">Comments</label>
                        <textarea name="" id="" cols={30} rows={10} value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div className="topic">
                        <label htmlFor="">Topic</label>
                        <select name="" id="">
                            <option value="">React</option>
                            <option value="">Angular</option>
                            <option value="">Vue</option>
                        </select>
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}