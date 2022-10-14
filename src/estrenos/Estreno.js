import React from 'react'
import MovieCard from '../moviecard/MovieCard'
import './estreno.css'
const Estreno = ({movie}) => {
  return (
    <section className='estreno'>
       <h1>Estrenos</h1>
        <div className='estreno__container'>
               {movie.map((item)=>(
                  <MovieCard key={item.id} poster_path={item.poster_path} title={item.title}/>
               )) }
          
        </div>
      </section>
  )
}

export default Estreno