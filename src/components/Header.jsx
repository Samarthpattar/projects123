import React from 'react'
import { useState } from 'react';

function Header() {
  const array=["home","contact us","blog","pages","help"];
  const [getElents, setElements]=useState(["home","contact us","blog","pages","help"]);
  const [count , setCount]=useState(0)

    //  var getElements=array.map((item, key) => { return <li key={key}>{item}</li>      })
    //  let filteredElements;
    //  let clicked=false;

      const fileterFunc=(e)=>{
        e.target.style.backgroundColor="red"
        console.log(e.target.textContent)
        e.target.textContent="clicked by samarth"
    //   clicked=true;
    //   filteredElements =array.filter((item,key) => item.includes("o")).map((item, key) => { return <li key={key}>{item}</li> })
        setElements(getElents.filter((item,key) => item.includes("o")))
        setCount(count+1)
      }

    // const getElements=array.reduce((arr,items, key) => {
    //     if(items.includes("e")){
    //         arr.push(<li key={key} >{items}</li>)
    //     }

    //     return arr;
    // },[])

  return (
        <div className='Header'>
            <ul>
                  { getElents.map((item, key) => { return <li key={key}>{item}</li> }) }
            </ul>
            <h1>Count printed {count }</h1>
            <button onClick={fileterFunc}>filter</button>
        </div> 
      )
  }

export default Header