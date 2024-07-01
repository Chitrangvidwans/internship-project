import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Featured from './components/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Home/>
   <Featured/>
  </>
  )
}

export default App
