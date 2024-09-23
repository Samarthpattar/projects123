import React, { useRef } from 'react'

const inputRef=useRef();

function Useref() {
 inputRef.current.value="samarth";
 inputRef.current.focus();

  return (
    <div>
        <button onClick={Useref}>click me</button>
        <input type='text' ref={inputRef}/>
        <Audio src="www.ganan.mp3" ref={inputRef}></Audio>
    </div>
  )
}

export default Useref