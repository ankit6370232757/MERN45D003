import React, { useContext } from 'react'
import { namecontext } from '../App'

function Child_3() {
    let name=useContext(namecontext)
  return (
    <div>
        <h1>Value is:{name}</h1>
      This is my child 3
    </div>
  )
}

export default Child_3
