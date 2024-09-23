import React from 'react'
import { useState } from 'react'





function Footer(props) {
console.log("footer")

const [initial, setInitial]=useState("");
const button={
    position: "relative",
    display: "inline",
    backgroundColor: "antiquewhite",
    width: "100px",
    marginLeft: "100px",
}




const clickFn=(event)=>{
console.log("name : ",event.target)

setInitial(event.target.className)
//event.target.style.backgroundColor="green";

//setBgColor( (pcolor) => pcolor === "antiquewhite" ? "green" : "antiquewhite")
}


    return (
            <div className='Footer'> 
                        <button style={{...button,...{backgroundColor: initial=="start" ?  "green"  : "antiquewhite"}}} className="start" onClick={clickFn} > Start</button>
                        <button style={{...button,...{backgroundColor: initial=="end" ?"green" : "antiquewhite"}}} className="end" onClick={clickFn}> End</button>
            </div>    
    )
}

export default Footer