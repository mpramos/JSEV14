import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]= useState(0)
  return (
    <>
        <p>Contador : {count}</p>
        <button onClick={()=>setCount(count+1)}>Incrementar</button>
    </>
  )
}
