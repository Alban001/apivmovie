import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './moviecardetail.css'
const MovieCardDetail = () => {

  const [libro, setLibro] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    movieDetalles()
  },[id])
const movieDetalles = async () =>{
  try {
      const detalles = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=702035e4cbc1821c72f6af59af045b04&language=es-ES`)
      
   
      const detallesMovies = await detalles.json() // devuelve todo el objeto y lo almacena en popu
 
      setLibro(detallesMovies) // lo almaceno en popular por medio del setPopular
    }
    catch (e) {
      console.log('Obtuvimos un error ', e);
    }
}
  return (
    <div className='moviecardetail'>
        <img src={'https://image.tmdb.org/t/p/w500/' + libro?.poster_path} alt='movie poster'/>
      <div className='moviecardetail__content'>
    
      <h1>{libro?.title}</h1>
      
      <h3>{libro?.overview}</h3>
      </div>
    </div>
  )
}

export default MovieCardDetail