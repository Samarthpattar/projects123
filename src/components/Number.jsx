import React, { useState } from 'react'

function Number() {

    const [hoverd, setHoverd]=useState(false);
    const [count , setCount]=useState(0);


    const mouseoverFun=()=>{
        setHoverd(true)
    }


    const mouseoutFun=()=>{
        setHoverd(false)
    }


   


  return (
    <div>
         <div>
             <p onMouseEnter={mouseoverFun} onMouseLeave={mouseoutFun}> please bring mouse over me </p>
               
            <h3>{count}</h3>


             {hoverd ?  <h1> hover is true</h1> : <h1> hover is false</h1>}
             
             <button onClick={()=>{setCount(count+1)}}>+</button>
             <button onClick={()=>{setCount(count-1)}}>-</button>

         </div>
    </div>
  )
}

export default Number