import React, { useContext } from 'react'
import { compEContext } from './CompE';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../store/slices/counterSlice';

function CompC() {
 const count=useSelector( (state) => state.counter.count);
 
 const dispatch=useDispatch();
 
 console.log(count)

  return (
    <div>
       <h3> count  is :{count}</h3>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CompC