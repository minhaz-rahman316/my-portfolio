import './App.scss'
import {About,Footer,Header,Skills,Works,Testimonial} from './container'
import {Navbar} from './components'
function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Works/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
