import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';

function Movie() {

  const params = useParams();
  const [movie, setMovie] = React.useState({});
  console.log(params)

  const api = import.meta.env.VITE_URL;

  async function getMovieDetails() {
      const url=api+"&i=" +params.id;
      console.log(url)

      const res=await axios.get(url);
      setMovie(res.data)
  }


  useEffect(()=>{
    getMovieDetails()
  },[params.id])


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' shadow-lg shadow-gray-600 rounded-2xl h-[100]'>
        <img src={movie.Poster} alt="" className='w-full h-[] rounded-2xl hover:rotate-15 transition duration-700'  />
        <p>
          <strong className='text-red-500 text-2xl'>Title  :</strong>  {movie.Title}
        </p>
        <p>
          <strong className='text-red-500 text-2xl'>Director :  </strong>{movie.Director}
        </p>
        <p>
          <strong className='text-red-500 text-2xl'>Writer :  </strong>{movie.Writer}
        </p>
        <p>
          <strong className='text-red-500 text-2xl'>Released :  </strong>{movie.Released}
        </p>
      </div>
    </div>
  )
}

export default Movie