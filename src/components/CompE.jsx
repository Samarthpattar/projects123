import React, { createContext, useContext } from 'react'


const compEContext=createContext();



function Myprovider({children}) {

    const person={
        name:"ajay",
        age:30,
        city:"banglore"
    }

  return (
    <div>
        <compEContext.Provider value={person}>
            {children}
        </compEContext.Provider>
    </div>
  )
}

export  {Myprovider, compEContext}