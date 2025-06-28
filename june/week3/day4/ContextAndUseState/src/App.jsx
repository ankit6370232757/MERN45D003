
import { createContext } from 'react';
import './App.css'
import Child_1 from './components/Child_1'
export let namecontext=createContext();
function App() {
 
let a =10;
  return (
    <>
     {/* <Child_1 a={a}/>  */}
     <namecontext.Provider value={"abc"}>
      <Child_1/>
     </namecontext.Provider>
    
    </>
  )
}
export default App
