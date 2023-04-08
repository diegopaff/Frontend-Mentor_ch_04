
import Header from '../src/sections/Header'
import About from '../src/sections/About'
import './App.scss'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Projects from './sections/Projects'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
