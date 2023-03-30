import { useState } from 'react'
import Header from '../src/sections/Header'
import About from '../src/sections/About'
import './App.scss'
import Services from './sections/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <About />
      <Services />
    </div>
  )
}

export default App
