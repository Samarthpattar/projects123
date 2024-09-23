import React, { useEffect, useState } from 'react'

function Meal() {

    const [mealData,setMealData]=useState([]);
    const [area,setArea]=useState("indian");
    const [inputData,setIputData]=useState("");
    const b_array=["indian","canadian","american","thai","british","russian"];

    const img_style={
        width:"220px",
        borderRadius:"10px",
        border:"2px solid blue"
    }

useEffect(()=>{
    const fetchdataapi= async ()=>{
         const api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
         console.log(api)

         
          
         const data= await api.json();

        

         setMealData(data.meals)
    }
    
    fetchdataapi()

},[area])


const onSubmitFn= async (e)=>{
    e.preventDefault();

    // const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputData}`)
    // const data = await api.json();

    // setMealData(data.meals)
    setArea(inputData);
    setIputData("")
}


// const setAreaFn=(ev)=>{
// console.log("button clicked", ev.target.textContent)
//     setArea(area)
// }



  return (
    <div>
       <div className='mx-auto text-center'>
           {
            b_array.map((item , key)=>{
                return <button key={key} onClick={ ()=>{ setArea(item)}} className='btn btn-outline-primary mx-3'>{item}</button>
            })
           }
        </div> 
        <form onSubmit={onSubmitFn} className='mx-auto text-center my-3'>
            <input type="text" value={inputData} onChange={ (e) => {setIputData(e.target.value)}} />
        </form>
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
        }}>
            {
                mealData.map((item ,key)=>{
                  return  <div key={item.idMeal} style={{textAlign:"center"}}>
                        <div>
                             <img src={item.strMealThumb} alt={item.strMeal} style={img_style} ></img>
                        </div>
                        <h5>{item.strMeal}</h5>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Meal