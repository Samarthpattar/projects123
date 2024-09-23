import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
    super();
    this.state={
        value:0
    };

    this.handleClick=this.handleClick.bind(this);
}



handleClick(){
  // this.state.value=this.state.value+1;
   this.setState( pval => ({
    value : pval.value+1}))
   // this.setState( pval => ({ value : pval.value+1}))
    console.log("number :",this.state.value)
}







  render() {

    return (
      <div className='counter'>
        <button onClick={this.handleClick}>click me</button>
        <p>count is {this.state.value}</p>
      </div>
    
    )
  }
}

export default Counter