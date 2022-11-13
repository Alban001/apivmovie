import React from 'react'
import './popucard.css'
import { useNavigate } from 'react-router-dom'

const PopuCard = ({poster_path, title, id}) => {
  const navigate = useNavigate()
  return (
   
    <div className='popucard'>
    <img className='popucard__img' src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt="Movies"   onClick={()=> navigate(`/popucard/${id}`)}/>
     <h3>{title}</h3>
    </div>
   
  )
}

export default PopuCard