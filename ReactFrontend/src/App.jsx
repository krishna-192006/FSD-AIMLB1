import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function getData(){
    alert("Hi get Inside!!")
  }

  return (
   <>
   <p> WELCOME TO REACT APP</p>
   <button onClick={getData}>Fetch data</button>
   </>
  )
}

export default App
