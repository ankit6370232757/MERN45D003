import React from 'react'

function Home(props) {
  return (
    <div>
      <h3 style={{textDecoration:'underline', }}>This is my Home Page</h3>
      the value is:{props.value}
      <br />
      the name is:{props.obj.name}
      <br />
      the age is:{props.obj.age}
    </div>

  )
}

export default Home
