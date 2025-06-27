import React, { useRef } from 'react'

export const StopWatch = () => {
    const inputRef = useRef()
    const submit = ()=>{
        console.log(
            inputRef.current.value
        );
    }
    console.log("render component");
  return (
    <div>
        <h1>Controller and uncontroller componets </h1>
        <input type="text" ref={inputRef} />
        <button onClick={submit}> submit</button>
    </div>
  )
}
