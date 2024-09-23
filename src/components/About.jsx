import React from 'react'
import CompA from './Home'
import {Myprovider} from './CompE'
import { Link,NavLink } from 'react-router-dom'

export const  persdata=[
  {
    title:"one",
  description:"anything" 
},
{
  title:"two",
description:"anything" 
},{
title:"three",
description:"anything" 
},{
title:"four",
description:"anything" 
},{
title:"five",
description:"anything" 
},{
title:"six",
description:"anything" 
}
]


function About() {
 
  return (
    <div className='about'>
      {/* const {persdata}=useParams(); */}
       <h2>This is  About comp</h2>
       <nav>
       <ul>
       {
        persdata.map( (person , key)=>{
          return <li key={key}>
            <NavLink to={`/about/${key}`}>{person.title}</NavLink>
           </li>     
        })
       }
       </ul>
       </nav>
       
      
    </div>
  )
}

export default About