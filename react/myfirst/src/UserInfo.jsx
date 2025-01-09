import React from 'react'

const UserInfo = (props) => {
  return (
      <>
        <h1>Nombre : {props.name} 👨‍🎓</h1>
        <h2>Edad: {props.age} 👨‍🎓</h2>
      </>
  )
}

export default UserInfo