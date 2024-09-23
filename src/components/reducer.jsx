import './App.css'
import Classs from './components/Classs'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Football from './components/Footbal'
import Mouseevent from './components/Mouseevent'
import Arrowfun from './components/Arrowfun'
import { useReducer, useState } from 'react'
import Counter from './components/Counter'
import Number from './components/Number'


const initialState={
  text:"",
  ucase:false,
  textColor:"black"
}


const reduced=(state,action)=>{ 
  switch(action.type){
    case 'SET_TEXT':

    return{
      ...state,
      text:action.text
    };

    case 'Color_change':

     return{
      ...state,
      textColor:action.color
     }

    case 'TO_UPPER' :

    return{
      ...state,
      text:state.text.toUpperCase(),
      ucase:true
    };

    
    case 'TO_LOWER' :

    return{
      ...state,
      text:state.text.toLowerCase(),
      ucase:false,
      textColor:"green"
    }

    default :

    return state;
    
    }

}




function App() {

  const [state,dispatch]=useReducer(reduced,initialState)


  const onChangeFun=(event)=>{
      dispatch({type:'SET_TEXT',text:event.target.value})
  }
  const Color_change=()=>{console.log("Color_change")
    dispatch({type:'Color_change',color:"yellow"})
  }

  const uppercaseFun=()=>{
   dispatch({type:'TO_UPPER'})
  }

  const lowercaseFun=()=>{
    dispatch({type:'TO_LOWER'})
  }




   return (
        <div className='App'>
           <input type="text" value={state.text}  onChange={onChangeFun} onMouseEnter={Color_change}/>
           <button onClick={uppercaseFun}>Touppercase</button>
           <button onClick={lowercaseFun}>ToLowercase</button>

           <h4 style={{color:state.textColor}}>{state.text}</h4>

           {state.ucase ?  <h2>YOu are  now using upper case </h2> : <h2>YOu are  now using bad lower case  </h2>}
        </div>
   )

}

  

export default App
