
import './App.css'
import {Route, Routes} from "react-router"
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
 

  return (
   <>
   <h1>Hello</h1>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
   </Routes>
    </>
  )
}

export default App
