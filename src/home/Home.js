import React, {Fragment, useEffect, useState} from 'react'
import MovieCard from '../moviecard/MovieCard'
import './home.css'
import Indexado from '../indexado/Indexado'
import PopuCard from '../popucard/PopuCard'



const Home = () => {
 
  const [pagina, setPagina] = useState(1)
  const [movie, setMovie] = useState([]) 
  const [popular, setPopular] = useState([]) 
        // Cargamos la funcion de contiene los datos fetch una vez que home es renderizado 
        
        useEffect(()=>{
            masPopulares()
            cargarLoultimo()
            
        },[pagina])

// Creamos la funcion de carga de peliculas estrenos  , consumiendo la api 
       
const cargarLoultimo = async () =>{
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
      const popular1 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=702035e4cbc1821c72f6af59af045b04&language=en-US')
   
      const popu = await popular1.json()
 
      setPopular(popu.results)
    }
    catch (e) {
      console.log('Obtuvimos un error ', e);
    }
}
console.log('home zone is ' +typeof(pagina))
  return (
    <Fragment>
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
       <section className='home__right'>
       <h1> ESTRENOS</h1>
        <div className='home__container'>
        {
            movie.map((item)=>(
               <MovieCard key={item.id} poster_path={item.poster_path} title={item.title}/>
            ))
        }
        </div>
        
      </section>
        
    </div>
    <Indexado setPagina={setPagina} pagina={pagina}  />
 
    </Fragment>
  )
}

export default Home