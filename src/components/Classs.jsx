import React, { Component } from 'react'

export class Classs extends Component {
//  constructor(props){
//     super(props);
//     this.state=props
//  }

  render() {
    return (
      <div className='class'>its a class component and my name is {this.props.name}</div>
    )
  }
}

export default Classs