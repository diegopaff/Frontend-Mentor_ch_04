import { useState } from 'react'
import Header from '../src/sections/Header'
import About from '../src/sections/About'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <About />
    </div>
  )
}

export default App
