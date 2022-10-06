import React, {Fragment, useEffect, useState} from 'react'
import MovieCard from '../moviecard/MovieCard'
import './home.css'
import Indexado from '../indexado/Indexado'



const Home = () => {
 
  const [pagina, setPagina] = useState(1)
  const [movie, setMovie] = useState([]) 
        // Cargamos la funcion de contiene los datos fetch una vez que home es renderizado 
        
        useEffect(()=>{
            
            cargarMovie()
           
        },[pagina])
        // Creamos la funcion de carga de movies , consumiendo la api 
       
const cargarMovie = async () =>{
  try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=702035e4cbc1821c72f6af59af045b04&language=en-US&page=${pagina}`)
      const pelis = await respuesta.json()
 
      setMovie(pelis.results)
      
      
    }
    catch (e) {
      console.log('Obtuvimos un error ', e);
    }
}
console.log('home zone is ' +typeof(pagina))
  return (
    <Fragment>
    <div className='home'>
        <h1> MAS POPULARES! </h1>
        <div className='home__container'>
        {
            movie.map((item)=>(
               <MovieCard key={item.id} poster_path={item.poster_path} title={item.title}/>
            ))
        }
        </div>
        
    </div>
    <Indexado setPagina={setPagina} pagina={pagina}  />
 
    </Fragment>
  )
}

export default Home