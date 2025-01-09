import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import UserInfo from './UserInfo'
import Welcome from './Welcome'
import { Counter } from './Counter'
import Despertador from './Despertador'
import CharacterCard from './CharacterCard'
import Characters from './Characters'

function App() {
  return (
    <>
      <div>
        {/* <Greeting/>
        <UserInfo name='jose' age='48'/>
        <Welcome name='jose'/>
        <Counter/>
        <Despertador/> */}
        <Characters/>
      </div>
    </>
  )
}

export default App
