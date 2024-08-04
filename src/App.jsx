import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Aside from './components/Aside'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aside />
       <div className="main-content">
       <Navbar/>
        <section style={{
       scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
     </>
  )
}

export default App
