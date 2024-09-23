import React from 'react'
import { useParams } from 'react-router-dom'
import { persdata } from './About'

function PostDisplay() {
    const {pdata}=useParams()
    
    const person=persdata[pdata];
  
    console.log(person) 
  return (
    <div>
        <h2>POSTS</h2>
        <p><strong>{person.title}</strong></p>
        <p>{person.description}</p>
    </div>
  )
}

export default PostDisplay