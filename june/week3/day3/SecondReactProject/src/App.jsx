
import './App.css'
import Home from './components/Home'
let arr=[1,2,3,4,5];
let imgLink = ""
let obj={
  name:"xyz",
  age:20
}
function App() {
 

  return (
    <>
      <h1>Hello React</h1>
      <Home value ={arr} obj={obj} imgLink={imgLink}/>


    </>
  )
}

export default App
