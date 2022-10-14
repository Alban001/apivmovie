import React from 'react'
import './popucard.css'
const PopuCard = ({poster_path, title}) => {
  return (
    <div className='popucard'>
    <img className='popucard__img' src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt="Movies"  />
     <h3>{title}</h3>
    </div>
  )
}

export default PopuCard