import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

function Movies() {

    const [moviesData, setMoviesData] = useState([])
    const [search, setSearch] = useState('all');



    // console.log(search)

    const navigate = useNavigate()
    

    const api = import.meta.env.VITE_URL;
    console.log(api)
    
    
    async function getMovies(s = "all") {
        const url = api + "&s=" + s;
        // console.log(first)
        
        const result = await axios.get(url)
        
        setMoviesData(result.data.Search)
    }
    useEffect(() => {
        getMovies()
    }, [])



    function handleSearch() {
        getMovies(search)
    }
    return (
       <div className='mt-15'>

            <div className="max-w-4xl mx-auto flex justify-center gap-3">
                <input type="text" placeholder='Search...' className='border p-2 w-xl rounded' onChange={(e) => {
                    setSearch(e.target.value)
                }} />
                <button className='p-2 bg-red-600 rounded' onClick={handleSearch}>Search</button>
            </div>

            <div className=' max-w-4xl mx-auto grid grid-cols-4'>
                {
                    moviesData?.length === 0 ? <p className='bg-amber-500'>Movies Not Found</p> :
                        moviesData?.length > 0 && moviesData.map((ele) => (<div key={ele.imdbID}>
                            <div
                                className='p-4 shadow-2xl hover:scale-105 rounded'
                                onClick={() => navigate(`/movie/${ele.imdbID}`)}
                            >
                                <img src={ele.Poster} alt="" className='h-[200px] w-[150px]' />
                                <p className='text-xl truncate '>{ele.Title}</p>
                                <p>{ele.Year}</p>
                                <p>{ele.Type}</p>
                            </div>
                        </div>))
                }
            </div>

        </div>
    )
}

export default Movies