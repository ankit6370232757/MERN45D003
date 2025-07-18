import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../components/Home'
import Movies from '../components/Movies'
import Movie from '../components/Movie'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie/:id' element={<Movie />} />

        </Routes>
      
    </div>
  )
}

export default AllRoutes
