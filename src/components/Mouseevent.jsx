import React from "react";

function Mouseevent()
{
    const handlerMouseEnter=e=>{
        e.target.style.background="yellow"
        e.target.style.color="red"
        e.target.textcontent="Mouse Now over button"
    }

    const handlerMouseLeave=e=>{
        e.target.style.background="blue"
        e.target.style.color="white"
        e.target.textcontent="Mouse now taken out form button"
    }

    return(
        <div className="App">
            <button 
            onMouseEnter={handlerMouseEnter}
            onMouseLeave={handlerMouseLeave}
            className="button">hover over me</button>
        </div>
    )
}

export default Mouseevent