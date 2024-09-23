// import React, { useContext, useEffect, memo } from 'react'
// import CompB from './CompB'
// import { compEContext } from './CompE'



// function CompA({onClick}) {
// console.log("child component")
//   // useEffect(() => {
//   //   console.log('Child component rendered');
//   // }, []);

//   return (
//     <div className='A'>
//        <h2>Child Component </h2>
//          <button onClick={onClick}>Child button</button>
//     </div>
//   )
// }

// export default memo(CompA)


// import './app.css'
// import { createContext, useReducer, useState ,useCallback} from 'react'
// import CompA from './components/CompA'

// const App=()=>{
//   console.log("app")
//   const [count,setCount]=useState(0)

//   const handleClick=useCallback(()=>{
//     console.log("handleclick")
//   },[])

//   return(
//     <div className='app'>
//            <h1>Count in parent {count}</h1>
//           <button onClick={()=> setCount(count+1)}>Parent button</button>
//           <CompA onClick={handleClick}  ></CompA>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../store/slices/userSlice';


function CompA() {

  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [hobbies, setHobbies]=useState([])
  const person=useSelector( state => state.user)
  const dispatch=useDispatch();

  const onSubmitHandler=()=>{
    console.log("clicked")
   // dispatch(payload :{} , changeData())
   dispatch(changeData({pname:name,page:age,phobbies:hobbies.split(",")}))
  }


  return (
    <div>
      <form  > 
        <label>Name : </label>
        <input type='text' onChange={(e)=> setName(e.target.value)}></input>
        <label>Age : </label>
        <input type='text' onChange={(e)=> setAge(e.target.value)}></input>
        <label>hobbies : </label>
        <input type='text' onChange={(e)=> setHobbies(e.target.value)}></input>

      </form>
      <button onClick={onSubmitHandler  }>Submit</button>
      <h3> My name is {person.name} and my age is {person.age}</h3>
      <p> my hobbies are {person.hobbies.map( item => { return item+"/ "})}</p>
    </div>
  )
}

export default CompA