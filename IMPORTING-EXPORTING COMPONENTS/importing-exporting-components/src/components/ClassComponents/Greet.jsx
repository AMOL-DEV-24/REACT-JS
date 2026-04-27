import React, { Component } from 'react'

export default class Greet extends Component {
  render() {
    return (
      <div>
        <h2>This is Class Component</h2>
      </div>
    )
  }
}

export class Welcome extends Component {
    render() {
        return (
        <div>
            <h2>This is Another Class Component</h2>
        </div>
        )
    }
}

