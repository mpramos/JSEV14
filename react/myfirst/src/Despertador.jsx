import React, { useEffect } from 'react'

function Despertador() {
    useEffect(()=>{
      console.log('se montó el componente');
        
    },[])

    return (
        <>
        <p>Despertador ⏰</p>
        </>
  )
}

export default Despertador