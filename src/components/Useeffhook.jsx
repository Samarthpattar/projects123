import React, { useEffect, useState } from 'react'

function Useeffhook() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("krishna");


    useEffect(()=>{
        console.log("renders alltime")
    },[])

    useEffect(()=>{
        console.log("component count rendererd")
    },[count]);

    useEffect(()=>{
        console.log("component name rendererd")
    },[name]);


  return (
    <div>
        <h1>value : {count} - name : {name }</h1>
        <button onClick={()=>{ setCount(count+1)}}>+</button>
        <button onClick={()=>{ setName("LCH")}}>-</button>
    </div>
  )
}

export default Useeffhook