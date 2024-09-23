import React, { useEffect, useMemo, useState } from 'react'

function Binding() {
    const [data,setData]=useState("")
    const [print,setPrint]=useState(false);
    const [dataList,setDataList]=useState([]);
    const [carname,setCarName]=useState("volvo");
    const [checked,setChecked]=useState(false);
    const [testData,setTestData]=useState(data);
    var predif=""


    const handleChange=(event)=>{
       setData(event.target.value)
    }
    

    const handleSelect=(e)=>{
        setName(e.target.value)
    }



    const addfn=()=>{
        if(!dataList.includes(data)){
            setDataList([...dataList,data])
        }
        
    }

    console.log(dataList)
  return (
    <div>
        {
            print ?  <h2>{data}</h2> : null
        }
        

        <input type="text" value={data} onChange={handleChange} 
        placeholder='ENTER A MESSAGE'
        ></input>
        <button onClick={()=>{setPrint(true)}}>Print</button>
        <button onClick={()=>{setPrint(false) 
                            setData("")}}>reset</button>
         <button onClick={addfn}>add</button>


            <ul>
                {dataList.map( (item,key) =>{
            return <li key={key}>{item}</li>
        })}
            </ul>
      <form >
      <select preventDefault={carname}  onChange={handleSelect} >
                <option value="audi">audi</option>
                <option value="Tata">Tata</option>
                <option value="Maruthi">maruthi</option>
                <option value="nexon">nexon</option>
               

            </select>
            <input type='checkbox' id="check_1" checked={checked} onChange={ ()=>{setChecked(!checked)}} ></input>
            <label htmlFor='check_1'>click me</label>
            <h2>{checked.toString()}</h2>
      </form>
      <label htmlFor='cars'></label>
            
    </div>

  )
}

export default Binding