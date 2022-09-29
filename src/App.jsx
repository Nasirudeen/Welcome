import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
// import Navbar from './Pages/Navbar'
import Defaultlayout from './Layout/Defaultlayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Defaultlayout>
      <div className="App">

        <h2>Welcome to home page</h2>
        <div style={{ display: "flex", width: "100%", gap: "20px" }}>
          <Link to={"/"} className='nav Link'>Home</Link>

          <Link to={"/Aboutus"} className='nav Link ' >AboutUs page</Link>

          <Link to={"/Partners"} className='nav Link'>Partners page</Link>
          <Link to={"/Portfolio"} className='nav Link'>Portfolio page</Link>
          <Link to={"/Help"} className='nav Link'>Help page</Link>
          <Link to={"/FAQs"} className='nav Link'>FAQs page</Link>
        </div>

      </div>

    </Defaultlayout>




  )
}

export default App

