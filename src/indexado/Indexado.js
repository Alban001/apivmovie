import React, { Fragment } from 'react'
import './indexado.css'


const Indexado = ({pagina, setPagina}) => {
  

  
 // Sector de Botones Touch con OnClick Fn
 const touch1 =()=>{
  setPagina(1)
 }
 const touch2 =()=>{
    setPagina(1)
    setPagina(1+1)
}
const touch3 =()=>{
  
  setPagina(1)
  setPagina(1+2)
}
const touch4 =()=>{
  setPagina(1)
    setPagina(1+3)
}
const touch5 =()=>{
  setPagina(1)
    setPagina(1+4)
}
const touch6 =()=>{
  setPagina(1)
    setPagina(1+5)
}
const touch7 =()=>{
  setPagina(1)
    setPagina(1+6)
}
const touch8 =()=>{
  setPagina(1)
    setPagina(1+7)
}
const touch9 =()=>{
  setPagina(1)
    setPagina(1+8)
}
const touch10 =()=>{
  setPagina(1)
    setPagina(1+9)
}
const touch11 =()=>{
  setPagina(1)
  setPagina(1+10)
 }
 const touch12 =()=>{
    setPagina(1)
    setPagina(1+11)
}
const touch13 =()=>{
  
  setPagina(1)
  setPagina(1+12)
}
const touch14 =()=>{
  setPagina(1)
    setPagina(1+13)
}
const touch15 =()=>{
  setPagina(1)
    setPagina(1+14)
}
const touch16 =()=>{
  setPagina(1)
    setPagina(1+15)
}
const touch17 =()=>{
  setPagina(1)
    setPagina(1+16)
}
const touch18 =()=>{
  setPagina(1)
    setPagina(1+17)
}
const touch19 =()=>{
  setPagina(1)
    setPagina(1+18)
}
const touch20 =()=>{
  setPagina(1)
    setPagina(1+19)
}
// Boton Anterior
const anterior =()=>{ 
  setPagina(pagina -1)
}
const siguiente =()=>{
  if(pagina <= 20){
    setPagina(pagina +1 )
  }

}
console.log('indexado zone is ' +typeof(setPagina))
  return (
    <Fragment>
      
      <div className='indexado'>
      <div className='indexado__paginacion'>
          { pagina <= 10 ?
       <h3> 
        <p id={pagina === 1 ? 'active' : ''} onClick={touch1}>1</p>
        <p id={pagina === 2 ? 'active' : ''} onClick={touch2}>2</p>
        <p id={pagina === 3 ? 'active' : ''} onClick={touch3}>3</p>
        <p id={pagina === 4 ? 'active' : ''} onClick={touch4}>4</p>
        <p id={pagina === 5 ? 'active' : ''} onClick={touch5}>5</p>
        <p id={pagina === 6 ? 'active' : ''} onClick={touch6}>6</p>
        <p id={pagina === 7 ? 'active' : ''} onClick={touch7}>7</p>
        <p id={pagina === 8 ? 'active' : ''} onClick={touch8}>8</p>
        <p id={pagina === 9 ? 'active' : ''} onClick={touch9}>9</p>
        <p id={pagina === 10 ? 'active' : ''} onClick={touch10}>10</p>
        </h3>
         :
         <h3> 
         <p id={pagina === 11 ? 'active' : ''} onClick={touch11}>11</p>
         <p id={pagina === 12 ? 'active' : ''} onClick={touch12}>12</p>
         <p id={pagina === 13 ? 'active' : ''} onClick={touch13}>13</p>
         <p id={pagina === 14 ? 'active' : ''} onClick={touch14}>14</p>
         <p id={pagina === 15 ? 'active' : ''} onClick={touch15}>15</p>
         <p id={pagina === 16 ? 'active' : ''} onClick={touch16}>16</p>
         <p id={pagina === 17 ? 'active' : ''} onClick={touch17}>17</p>
         <p id={pagina === 18 ? 'active' : ''} onClick={touch18}>18</p>
         <p id={pagina === 19 ? 'active' : ''} onClick={touch19}>19</p>
         <p id={pagina === 20 ? 'active' : ''} onClick={touch20}>20</p>
         </h3>
      }
      </div>
        <div className='indexado__botones'>
          <button onClick={siguiente} > Siguiente</button>
          <button onClick={anterior}> Anterior</button>
        </div>
        
    </div>
    </Fragment>
    
  )
}

export default Indexado