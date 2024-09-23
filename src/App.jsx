import './app.css'
import React, { useRef } from 'react'
import {Routes,Route, BrowserRouter as Router, Link, useParams, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Indexof from './components/Indexof'
import ErrorComp from './components/ErrorComp'
import PostDisplay from './components/PostDisplay'
import { NavLink, Outlet } from 'react-router-dom'
import Roots from './components/Roots'
import Meal from './components/Meal'


const rooter=createBrowserRouter([
  {
    path:"/",
    element:<Roots/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/meals",
        element:<Meal/>
      },
      {
        path:"/about/:pdata",
        element:<PostDisplay/>
      }
    ]
  }
])

  

function App() {

  const pages=["compA","compb","compC"];
  
    return <RouterProvider router={rooter}/>
  }
  
  export default App