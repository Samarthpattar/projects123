import React, { Component } from 'react'

export class Navbar extends Component {
     constructor(props){
        super(props)
        this.state={isClicked:true,
                     mytext:"click me 1",
                     count:0
                    };
        

       this.handleClick=this.handleClick.bind(this);

     }

       handleClick(){
        console.log("clickedppppp")
        this.setState({
            mytext:"personal button"
        })

        this.setState(prevCount => { prevCount.count =prevCount.count+1})
       }

     




  render() {
    return (
      <div className='Navbar'>
           <button className='b_tn' onMouseLeave={this.handleClick}>{this.state.mytext}</button>
           <h2> classs component count {this.state.count}</h2>
      </div>
    )
  }
}

export default Navbar