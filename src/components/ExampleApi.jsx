import React, { useEffect, useState } from 'react'

function ExampleApi() {

    const [apiData,setApiData]=useState([]);

    useEffect(()=>{

    const fetchApiData= async ()=>{
          
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data= await  response.json();
        setApiData(data)
        
    }

    fetchApiData()

    },[])



    const newArray="kiranrao"
    console.log(Array.from(newArray))





  return (
    <div>
        <ul style={{listStyleType:"number",
    textAlign:"left"}}>
        {apiData.map((item,key)=>{
            return <li key={item.id}>{item.body}</li> 
         })}
        </ul>
         
    </div>
  )
}

export default ExampleApi