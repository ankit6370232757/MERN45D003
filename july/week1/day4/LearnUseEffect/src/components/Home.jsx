import React from 'react'
import { useEffect,useState } from 'react'
function Home() {
    const[data,setData]=useState([]);
     useEffect(()=>{
      async function getData(){
        const resp= await fetch("https://jsonplaceholder.typicode.com/posts") 
        const data=await resp.json();
        setData(data)

      }
      getData()
    
     })
    
  return (
    <div>
      <h1 className='bg-red-500'>this is home page</h1>
      <ul className='flex flex-wrap justify-center gap'></ul>
      {data.map((ele)=> {
        return (
          <li>{ele.title},{ele.id}</li>
        )
      })}
    
      

    </div>
  )
}

export default Home
