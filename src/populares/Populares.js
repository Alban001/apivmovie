import React from 'react'
import PopuCard from '../popucard/PopuCard'
import './populares.css'
const Populares = ({popular}) => {
  return (
    <section className='populares'>
    <h1>Populares</h1>
   
     <div className='populares__container'>
     
            {popular.map((item)=>(
             
               <PopuCard id={item.id} poster_path={item.poster_path} title={item.title}/>
               
            )) }
      
     </div>
   
   </section>
  )
}

export default Populares