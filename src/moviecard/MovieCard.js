import React from 'react'
import './moviecard.css'
const MovieCard = ({poster_path, title}) => {
  return (
    <div className='moviecard'>
      <img className='moviecard__img' src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt="Movies"  />
      <h3>{title}</h3>
      </div>
  )
}

export default MovieCard