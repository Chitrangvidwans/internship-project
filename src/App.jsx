import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Featured from './components/Featured'
import Contact from './components/Contact'
import Featuredcomp from './components/Featuredcomp'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Home/>
   {/* <Featured/> */}
    <Featuredcomp/>
   <Contact/>
  </>
  )
}

export default App
