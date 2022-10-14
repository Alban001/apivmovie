import React, {Fragment, useEffect, useState} from 'react'
import MovieCard from '../moviecard/MovieCard'
import './home.css'
import Indexado from '../indexado/Indexado'
import PopuCard from '../popucard/PopuCard'
import movies from '../imagenes/movies.jpg'
import Estreno from '../estrenos/Estreno'
import Populares from '../populares/Populares'
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => {
 
  const [pagina, setPagina] = useState(1)
  const [movie, setMovie] = useState([]) 
  const [popular, setPopular] = useState([]) 
        // Cargamos la funcion de contiene los datos fetch una vez que home es renderizado 
        
        useEffect(()=>{
            masPopulares()
            cargarEstrenos()
            
        },[pagina])

// Creamos la funcion de carga de peliculas estrenos  , consumiendo la api 
       
const cargarEstrenos = async () =>{
  try {
      const upcoming = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=702035e4cbc1821c72f6af59af045b04&language=en-US&page=${pagina}`)
   
      const latestmovies = await upcoming.json()
 
      setMovie(latestmovies.results)

    }
    catch (e) {
      console.log('Obtuvimos un error ', e);
    }
}

// Funcion async que llama api de peliculas más populares

const masPopulares = async () =>{
  try {
      const popular1 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=702035e4cbc1821c72f6af59af045b04&language=en-US&page=${pagina}`)
   
      const popu = await popular1.json()
 
      setPopular(popu.results)
    }
    catch (e) {
      console.log('Obtuvimos un error ', e);
    }
}

  return (
    <Fragment>
       <div className='header'>
        <img className='header__image' src={movies} width='1335' height='100' alt='Foto de cine' />
        <nav>
                <Link className='header__link' to='/'>Home</Link>
                <Link className='header__link' to='/populares'>Mas populares</Link> 
                <Link className='header__link' >Recomendados</Link>
              
        </nav>
      
    </div>
     <div className='home'>
    
       <aside  className='home__left'>
          <header><h1>+ Populares</h1></header>
        {popular.map((item, index) => {
        if (index < 9) {
          return <PopuCard key={item.id} poster_path={item.poster_path}/>
        }
        return null;
      })}
       </aside>

          {/* Abajo renderizo populares o estrenos*/}
          <Routes>
              <Route path='/' element={<Estreno movie={movie} />}/>
              <Route path='/populares' element={<Populares popular={popular}/>} />
          </Routes>
         
    </div>
    <Indexado setPagina={setPagina} pagina={pagina}  />
 
    </Fragment>
  )
}

export default Home