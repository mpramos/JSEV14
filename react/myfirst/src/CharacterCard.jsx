import React from 'react'

const CharacterCard = (props) => {
  return (
    <>
        <img src={props.character.image} alt="" />
        <h2>{props.character.name}</h2>
        <p>Status:{props.character.status}</p>
        <p>Specie:{props.character.species}</p>
    </>
  )
}

export default CharacterCard