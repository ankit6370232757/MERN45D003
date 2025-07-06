import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("light")
  function handleTheme(){
    if(theme==="light"){
      setTheme("dark")
     setTheme("Dark")
      document.body.style.backgroundColor="Black";
    }
 
  else{
    setTheme("Light")
  }

  }
  function handleClick(){
    setCount(count+1)
     

    
  }

  return (
    <>
      <h1>Hello</h1>
      <h1>Value is: {count}</h1>
      <button onClick={handleClick}>inc</button>
      <button onClick={handleTheme}>Tuggle</button>
    </>
  )
}

export default App
