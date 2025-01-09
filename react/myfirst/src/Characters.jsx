import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'

const Characters = () => {
    const [characters, setCharacters]=useState([])
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=> response.json())
        .then((data)=> setCharacters(data.results))
        .catch((error)=>console.error('Error', error)
        )
    },[])
  return (
    <>
        <header>
            <h1>Rick and Morty Characters</h1>
        </header>
        <main>
            <div className="character-list">
              {characters.map(character=>(
                <CharacterCard key={character.id} character={character}/>
              ))}  
            </div>
        </main>
    </>
  )
}

export default Characters