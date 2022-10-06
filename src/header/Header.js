import React from 'react'
import './header.css'
import movies from '../imagenes/movies.jpg'
const Header = () => {
    let w = window.innerWidth;
            let h = window.innerHeight;
            console.log('widh is '+ w + '    height is ' + h + '')

  return (
    <div className='header'>
        <img className='header__img' src={movies} width='1335' height='100' alt='Foto de cine' />
        <nav>
           <a>Home</a>
                <a>Mas populares</a>
                <a>Recomendados</a>
                <a>Estrenos</a>
        </nav>
      
    </div>
  )
}

export default Header