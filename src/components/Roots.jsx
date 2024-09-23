import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

function Roots() {

  const rootCounter=useSelector( state => state.counter.count);
  const personName=useSelector( state => state.user.name)

  return (
    <div className='rootDiv'>
           <h2> this is root component and the counter is {rootCounter} and name {personName} </h2>
             <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/meals">Meals</NavLink>
             </nav>
             <div className='outlet'>
                <Outlet></Outlet>
             </div>
    </div>
  )
}

export default Roots